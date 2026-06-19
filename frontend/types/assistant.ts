export interface AssistantResponse {
  answer: string;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}