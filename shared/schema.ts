import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contactInquiries = pgTable("contact_inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  inquiryType: text("inquiry_type").default("inquiry").notNull(),
  date: text("date"),
  time: text("time"),
  guests: integer("guests"),
  message: text("message"),
  status: text("status").default("新規").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const menuItemUpdates = pgTable("menu_item_updates", {
  id: serial("id").primaryKey(),
  itemId: text("item_id").notNull(),
  name: text("name"),
  description: text("description"),
  price: integer("price"),
  image: text("image"),
  category: text("category"),
  isActive: boolean("is_active").default(true),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const announcements = pgTable("announcements", {
  id: serial("id").primaryKey(),
  title:
