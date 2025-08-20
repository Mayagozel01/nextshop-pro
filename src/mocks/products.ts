import type { Product } from "../redux/types";
import joystick from "../assets/pictures/products/joystik.png";
import chair from "../assets/pictures/products/chair.png";
import keyboard from "../assets/pictures/products/keyboard.png";
import monitor from "../assets/pictures/products/monitor.png";


export const mockProducts: Product[] = [
    { id: 1, title: "iPhone 14", price: 999, image: joystick, description: "From Figma" },
    { id: 2, title: "MacBook Air", price: 1299, image: chair },
    { id: 3, title: "Apple Watch", price: 399, image: keyboard },
    { id: 4, title: "Apple Watch", price: 399, image: monitor },
    { id: 5, title: "Apple Watch", price: 399, image: joystick },
    { id: 6, title: "Apple Watch", price: 399, image: chair },
    { id: 7, title: "Apple Watch", price: 399, image: monitor},
  ];