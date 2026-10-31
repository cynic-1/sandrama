import { englishMessage } from "@/lib/englishMessages";

export interface ApiResponse {
  code: number;
  data: any;
  message: string;
}

// Success callback
export function success<T>(data: T | null = null, message: string = "Success"): ApiResponse {
  return {
    code: 200,
    data,
    message: englishMessage(message),
  };
}

// Client error response
export function error<T>(message: string = "", data: T | null = null): ApiResponse {
  return {
    code: 400,
    data,
    message: englishMessage(message),
  };
}
