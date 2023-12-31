package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Agenda struct {
	ID           primitive.ObjectID `bson:"_id,omitempty" json:"_id"`
	Title        string             `json:"title,omitempty" validate:"required"`
	TimeFrom     string             `json:"timeFrom,omitempty" validate:"required"`
	TimeUntil    string             `json:"timeUntil,omitempty"`
	Desc         string             `json:"desc,omitempty" validate:"required"`
	Date         time.Time          `json:"date,omitempty"`
	LocationFrom string             `json:"locationFrom,omitempty" validate:"required"`
	LocationTo   string             `json:"locationTo,omitempty"`
	Contact      string             `json:"contact,omitempty" validate:"required"`
	Pinandita    []string           `json:"pinandita,omitempty"`
	Pelaksana    []string           `json:"pelaksana,omitempty"`
	Tkumpul      string             `json:"tkumpul,omitempty"`
	Catatan      string             `json:"catatan,omitempty"`
	Transport    []string           `json:"transport,omitempty"`
}
