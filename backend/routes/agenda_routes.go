package routes

import (
	"backend/controllers"

	"github.com/gofiber/fiber/v2"
)

func AgendaRoutes(app *fiber.App) {
	app.Post("/agenda", controllers.CreateAgenda)
	app.Get("/agenda-bulan-ini", controllers.CurrentMonthAgenda)
	app.Get("/agenda-yang-lewat", controllers.PastAgenda)
	app.Get("/agenda/:id", controllers.GetAgenda)
}
