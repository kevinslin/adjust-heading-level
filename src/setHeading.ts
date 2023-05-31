import * as vscode from 'vscode';
import { adjustHeadingLevel } from './utils';

export async function setHeading() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showErrorMessage('No active text editor found');
        return;
    }

    const selectedText = editor.document.getText(editor.selection);
    const inputBoxOptions: vscode.InputBoxOptions = {
        prompt: 'Enter the desired heading level (1-6)',
        validateInput: (value) => {
            const level = parseInt(value);
            if (isNaN(level) || level < 1 || level > 6) {
                return 'Please enter a valid heading level (1-6)';
            }
            return null;
        },
    };

    const levelInput = await vscode.window.showInputBox(inputBoxOptions);
    if (!levelInput) {
        return;
    }

    const currentLevel = getCurrentHeadingLevel(selectedText);
    const adjustment = parseInt(levelInput) - currentLevel;
    const newText = adjustHeadingLevel(selectedText, adjustment);

    editor.edit((editBuilder) => {
        editBuilder.replace(editor.selection, newText);
    });
}

function getCurrentHeadingLevel(text: string): number {
    const match = text.match(/^(#+)/);
    return match ? match[0].length : 0;
}