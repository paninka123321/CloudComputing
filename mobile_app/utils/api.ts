import * as FileSystem from 'expo-file-system'; // for image
import { Platform } from 'react-native'; // for image

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
    imageUri: string; // for base64 conversion later
    time: number;
  }
  
export const sendShapesData = (data: ShapesData) => {
    return fetch("http://localhost:8000/api/shapes/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };
  
  export const sendEmotionsData = (data: EmotionsData) => {
    return fetch("http://localhost:8000/api/emotions/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };
  
  export const sendWritingsData = async (data: WritingsData) => {
    const base64Image = await FileSystem.readAsStringAsync(data.imageUri, {
        encoding: FileSystem.EncodingType.Base64,
      });

    const payload = {
        student: data.student,
        image: base64Image, // what the backend expects
        time: data.time,
    };

    return fetch("http://localhost:8000/api/writings/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  };
  