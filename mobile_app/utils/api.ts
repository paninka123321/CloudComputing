import * as FileSystem from 'expo-file-system';
import { Platform } from 'react-native';

// === Interfaces ===

export interface ShapesData {
  student: number;
  correct: number;
  incorrect: number;
  time: number;
}

export interface EmotionsData {
  student: number;
  happy: number;
  angry: number;
  sad: number;
  time: number;
}

export interface WritingsData {
  student: number;
  imageUri: string;
  time: number;
}

// === API ENDPOINTS ===

const API_BASE_URL = "https://psychobackend-312700987588.europe-central2.run.app";

// === Shapes ===

export const sendShapesData = (data: ShapesData) => {
  return fetch(`${API_BASE_URL}/api/shapes/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      student_id: data.student,
      correct: data.correct,
      incorrect: data.incorrect,
      time: data.time,
    }),
  });
};

// === Emotions ===

export const sendEmotionsData = (data: EmotionsData) => {
  return fetch(`${API_BASE_URL}/api/emotions/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      student_id: data.student,
      happy: data.happy,
      angry: data.angry,
      sad: data.sad,
      time: data.time,
    }),
  });
};

// === Writings ===

export const sendWritingsData = async (data: WritingsData) => {
  const base64Image = await FileSystem.readAsStringAsync(data.imageUri, {
    encoding: FileSystem.EncodingType.Base64,
  });

  return fetch(`${API_BASE_URL}/api/writings/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      student_id: data.student,
      png_file: base64Image, // to odpowiada polu w serializerze
      time: data.time,
    }),
  });
};
