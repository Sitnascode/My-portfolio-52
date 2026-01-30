"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Github, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setStatusMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("success")
        setStatusMessage(data.message || "Message sent successfully!")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
        setStatusMessage(data.error || "Failed to send message. Please try again.")
      }
    } catch {
      setStatus("error")
      setStatusMessage("An error occurred. Please try again later.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          Feel free to reach out for collaborations, opportunities, or just a friendly chat about software engineering.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <button 
                  type="button"
                  onClick={() => {
                    const email = "sitira2022@outlook.com"
                    const subject = encodeURIComponent("Message from Portfolio")
                    const body = encodeURIComponent("Hi Sitira,\n\n")
                    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`
                    const link = document.createElement("a")
                    link.href = mailtoLink
                    link.click()
                  }}
                  className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-all duration-300 p-2 -m-2 rounded-lg hover:bg-primary/5 w-full text-left cursor-pointer"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">sitira2022@outlook.com</span>
                </button>
                
                <button 
                  type="button"
                  onClick={() => {
                    window.location.href = "tel:+251993737299"
                  }}
                  className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-all duration-300 p-2 -m-2 rounded-lg hover:bg-primary/5 w-full text-left cursor-pointer"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">+251 993 737 299</span>
                </button>
                
                <a 
                  href="https://github.com/sitnascode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-all duration-300 p-2 -m-2 rounded-lg hover:bg-primary/5"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">github.com/sitnascode</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={4}
                  required
                  className="bg-secondary border-border text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>
              
              {status === "success" && (
                <div className="flex items-center gap-2 p-3 bg-emerald-500/20 text-emerald-400 rounded-lg border border-emerald-500/30">
                  <CheckCircle className="h-5 w-5" />
                  <span className="text-sm">{statusMessage}</span>
                </div>
              )}
              
              {status === "error" && (
                <div className="flex items-center gap-2 p-3 bg-rose-500/20 text-rose-400 rounded-lg border border-rose-500/30">
                  <AlertCircle className="h-5 w-5" />
                  <span className="text-sm">{statusMessage}</span>
                </div>
              )}

              <Button 
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
