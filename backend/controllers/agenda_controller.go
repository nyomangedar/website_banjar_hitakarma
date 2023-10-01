package controllers

import (
	"backend/configs"
	"backend/models"
	"backend/responses"
	"context"
	"fmt"
	"net/http"
	"time"

	"github.com/gofiber/fiber/v2"
	// "go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

var agendaCollection *mongo.Collection = configs.GetCollection(configs.DB, "agenda")

// Create an Agenda
func CreateAgenda(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var agenda models.Agenda
	defer cancel()

	//validate the req body
	if err := c.BodyParser(&agenda); err != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.AgendaResponse{Status: http.StatusBadRequest, Message: "error", Data: &fiber.Map{"data": err.Error()}})
	}

	if validationErr := validate.Struct(&agenda); validationErr != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.AgendaResponse{Status: http.StatusBadRequest, Message: "Field Error", Data: &fiber.Map{"data": validationErr.Error()}})
	}

	newAgenda := models.Agenda{
		Title:        agenda.Title,
		TimeFrom:     agenda.TimeFrom,
		TimeUntil:    agenda.TimeUntil,
		Desc:         agenda.Desc,
		Date:         agenda.Date,
		LocationFrom: agenda.LocationFrom,
		LocationTo:   agenda.LocationTo,
		Contact:      agenda.Contact,
		Pinandita:    agenda.Pinandita,
		Pelaksana:    agenda.Pelaksana,
		Tkumpul:      agenda.Tkumpul,
		Catatan:      agenda.Catatan,
		Transport:    agenda.Transport,
	}

	result, err := agendaCollection.InsertOne(ctx, newAgenda)
	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.AgendaResponse{Status: http.StatusInternalServerError, Message: "Error creating agenda", Data: &fiber.Map{"data": err}})
	}

	return c.Status(http.StatusCreated).JSON(responses.AgendaResponse{Status: http.StatusCreated, Message: "Agenda Successfully Created", Data: &fiber.Map{"data": result}})
}

// Get specific agenda
func GetAgenda(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var agenda models.Agenda
	defer cancel()

	id := c.Params("id")

	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.AgendaResponse{
			Status:  http.StatusBadRequest,
			Message: "Bad Id request",
			Data:    &fiber.Map{"data": err},
		})
	}

	filter := bson.M{
		"_id": objectId,
	}

	result := agendaCollection.FindOne(ctx, filter)

	if result.Err() != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.AgendaResponse{
			Status:  http.StatusInternalServerError,
			Message: "Error finding agenda",
			Data:    &fiber.Map{"data": result.Err()}})
	}

	if err := result.Decode(&agenda); err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.AgendaResponse{
			Status:  http.StatusInternalServerError,
			Message: "Selected Agenda corrupterd",
			Data:    &fiber.Map{"data": err},
		})
	}

	return c.Status(http.StatusOK).JSON(responses.AgendaResponse{
		Status:  http.StatusOK,
		Message: "Succesful return agenda",
		Data:    &fiber.Map{"data": agenda},
	})

}

// Get upcoming agenda
func UpcomingAgenda(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var agendas []models.Agenda
	defer cancel()

	filter := bson.M{
		"date": bson.M{
			"$gte": time.Now(),
		},
	}

	results, err := agendaCollection.Find(ctx, filter)

	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.AgendaResponse{Status: http.StatusInternalServerError, Message: "Internal Server Error", Data: &fiber.Map{"data": err}})
	}

	defer results.Close(ctx)
	for results.Next(ctx) {
		var singleAgenda models.Agenda
		if err = results.Decode(&singleAgenda); err != nil {
			return c.Status(http.StatusInternalServerError).JSON(responses.AgendaResponse{Status: http.StatusInternalServerError, Message: "Internal Server Error", Data: &fiber.Map{"data": err}})
		}
		agendas = append(agendas, singleAgenda)
	}
	return c.Status(http.StatusOK).JSON(responses.AgendaResponse{Status: http.StatusOK, Message: "Success Get This Month Agenda", Data: &fiber.Map{"data": agendas}})

}

// Get agenda yang lewat
func PastAgenda(c *fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var agendas []models.Agenda
	defer cancel()

	filter := bson.M{
		"date": bson.M{
			"$lte": time.Now(),
		},
	}

	results, err := agendaCollection.Find(ctx, filter)

	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.AgendaResponse{Status: http.StatusInternalServerError, Message: "Internal Server Error", Data: &fiber.Map{"data": err}})
	}

	for results.Next(ctx) {
		var singleAgenda models.Agenda
		if err = results.Decode(&singleAgenda); err != nil {
			return c.Status(http.StatusInternalServerError).JSON(responses.AgendaResponse{Status: http.StatusInternalServerError, Message: "Internal Server Error", Data: &fiber.Map{"data": err}})
		}
		agendas = append(agendas, singleAgenda)
	}
	return c.Status(http.StatusOK).JSON(responses.AgendaResponse{Status: http.StatusOK, Message: "Success Get Past Agendas", Data: &fiber.Map{"data": agendas}})

}

func getFirstDayInMonth() time.Time {
	now := time.Now()
	currentYear, currentMonth, _ := now.Date()
	currentLocation := now.Location()
	firstOfMonth := time.Date(currentYear, currentMonth, 1, 0, 0, 0, 0, currentLocation)
	fmt.Println(firstOfMonth)
	return firstOfMonth
}

func getLastDayInMonth() time.Time {
	firstOfMonth := getFirstDayInMonth()
	lastOfMonth := firstOfMonth.AddDate(0, 1, 0)
	fmt.Println(lastOfMonth)
	return lastOfMonth
}
