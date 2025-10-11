# SnapNutrient Website

In today’s fast-paced world, it has become more and more difficult to eat a balanced and nutritious diet. Most people find it difficult to accurately determine the nutritional value of their food and consequently end up with unintentional dietary imbalances that impact general health and well-being. The increasing prevalence of lifestyle diseases like obesity, diabetes, and cardiovascular diseases further highlights the necessity for user-friendly tools that can help make effective dietary choices.

SnapNutrient is an intelligent mobile application developed to address this growing need by providing users with real-time dietary analysis and macronutrient estimation. Based on YOLOv8, an advanced object detection algorithm, the application lets users instantly analyze meals by scanning food with their phone's camera. With the ability to detect individual foods and approximate their macronutrient content in real time, SnapNutrient fills the gap between sophisticated machine learning and common nutrition aids. This technology equips consumers with higher levels of nutritional knowledge, bringing healthy eating more within reach for everyone.

The application not only provides accurate data on macronutrients like proteins, carbohydrates, and fats but also integrates seamlessly with health trackers to offer personalized recommendations. Although tailored mainly for Filipino foods, SnapNutrient also accommodates international dishes, hence proving to be versatile for individuals with different dietary cultures and preferences.

This study highlights the development and implementation of SnapNutrient, focusing on the integration of YOLOv8 for food recognition, the design of its user-friendly interface, and its potential impact on promoting healthier dietary habits. By leveraging artificial intelligence, the project aims to contribute to global health efforts, enabling individuals to take proactive control of their nutritional intake and overall well-being.

---


## Frontend Installation Guide (React JS)


### 1.0. ReactJS Installation

```bash
npm create vite@latest ./ -- --template react
```
### 1.2. Tailwind Autoprefixer Installation
```bash
npm install -D tailwindcss postcss autoprefixer
```
### 1.3. Tailwind Installation
```bash
npm install tailwindcss @tailwindcss/vite
```

### 1.4. After Installation, Setup or add this codes in vite.config.js
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' //add this line

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),  //add this line 
    react()],
})
```
### 1.5. Add a file name (tailwind.config.js) if the installation dont work and copy this code

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
### 1.6. Add this code in index.css (file path src)
```css
@import "tailwindcss";
```
