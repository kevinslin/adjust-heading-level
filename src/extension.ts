import * as vscode from 'vscode';
import { increaseHeading } from './increaseHeading';
import { decreaseHeading } from './decreaseHeading';
import { setHeading } from './setHeading';

export function activate(context: vscode.ExtensionContext) {
    const increaseHeadingCommand = vscode.commands.registerCommand('extension.increaseHeading', () => {
        increaseHeading();
    });

    const decreaseHeadingCommand = vscode.commands.registerCommand('extension.decreaseHeading', () => {
        decreaseHeading();
    });

    const setHeadingCommand = vscode.commands.registerCommand('extension.setHeading', () => {
        setHeading();
    });

    context.subscriptions.push(increaseHeadingCommand);
    context.subscriptions.push(decreaseHeadingCommand);
    context.subscriptions.push(setHeadingCommand);
}

export function deactivate() {}