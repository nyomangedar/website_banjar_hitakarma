package routes

import (
	"backend/controllers"

	"github.com/gofiber/fiber/v2"
)

func AgendaRoutes(app *fiber.App) {
	app.Post("/agenda", controllers.CreateAgenda)
	app.Get("/agenda-upcoming", controllers.UpcomingAgenda)
	app.Get("/agenda-yang-lewat", controllers.PastAgenda)
	app.Get("/agenda/:id", controllers.GetAgenda)
}
