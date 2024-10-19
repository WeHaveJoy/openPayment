import './style.css'

import openPayment from "./app";
import "./app"

import Alpine from "alpinejs";
import persist from '@alpinejs/persist';

window.Alpine = Alpine;
Alpine.plugin(persist);

 Alpine.data('info', openPayment)

Alpine.start();