"use client";

import { useState } from "react";

import { useAssistant } from "@/hooks/useAssistant";

import { ChatMessage } from "@/types/assistant";

export default function ChatWindow() {
  const { askAssistant, loading } =
    useAssistant();

  const [question, setQuestion] =
    useState("");

  const [messages, setMessages] =
    useState<ChatMessage[]>([]);

  async function handleSend() {
    if (!question.trim()) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: question,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    const currentQuestion = question;

    setQuestion("");

    const answer =
      await askAssistant(
        currentQuestion
      );

    const assistantMessage: ChatMessage =
      {
        role: "assistant",
        content: answer,
      };

    setMessages((prev) => [
      ...prev,
      assistantMessage,
    ]);
  }

  return (
    <div className="glass glow rounded-2xl p-6 mt-8">
      <div className="h-[500px] overflow-y-auto mb-6 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={
              message.role === "user"
                ? "text-right"
                : "text-left"
            }
          >
            <div
              className={`inline-block max-w-[75%] p-4 rounded-xl ${
                message.role === "user"
                  ? "bg-cyan-600"
                  : "bg-slate-800"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <input
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
          placeholder="Ask UrbanMindX..."
          className="flex-1 p-4 rounded-xl bg-slate-900 border border-slate-700"
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="px-6 py-4 rounded-xl bg-cyan-600 hover:bg-cyan-500"
        >
          {loading
            ? "Thinking..."
            : "Send"}
        </button>
      </div>
    </div>
  );
}