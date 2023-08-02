package main

import (
	"backend/configs"
	"backend/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(&fiber.Map{"data": "Hello from FIber & mongo"})
	})
	//run database
	configs.ConnectDB()

	//routes
	routes.ArticleRoutes(app)
	routes.AgendaRoutes(app)

	app.Listen(":8000")
}
