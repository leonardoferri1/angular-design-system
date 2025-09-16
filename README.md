@leonardoferri/angular-design-system

A reusable Angular Design System built by Leonardo Ferri
.
This library provides a collection of clean, accessible, and customizable UI components to accelerate development and ensure design consistency across Angular applications.

Feel free to clone it and use as a foundation of your own library.

✨ Features

Built with Angular 18+

Lightweight and tree-shakable (sideEffects: false)

Easy to integrate into any Angular application

Includes frequently used input and navigation components

📦 Installation
npm install @leonardoferri/angular-design-system

Make sure you have Angular 18+ installed in your project:

"peerDependencies": {
"@angular/common": "^18.0.0",
"@angular/core": "^18.0.0"
}

🚀 Usage

Import the module into your Angular application:

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularDesignSystemModule } from '@leonardoferri/angular-design-system';

@NgModule({
declarations: [AppComponent],
imports: [BrowserModule, AngularDesignSystemModule],
bootstrap: [AppComponent],
})
export class AppModule {}

🧩 Components

Currently available components:

CurrencyInput – handles formatted monetary values

DatePicker – calendar-based date selection

Dropdown – single-selection dropdown menu

MultiSelect – multiple-selection dropdown

NumberInput – numeric field with validation

SideNav – responsive side navigation menu

TextArea – multi-line input field

TextInput – standard text input field

🔧 Scripts

The project includes several helper scripts:

npm run build:lib – Build the library

npm run publish:lib – Publish to npm (public access)

npm run build:lib:publish – Build and publish in one command

npm run release:patch – Release a patch version

npm run release:minor – Release a minor version

npm run release:major – Release a major version
