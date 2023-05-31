import * as vscode from 'vscode';
import { adjustHeadingLevel } from './utils';

export async function decreaseHeading() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showErrorMessage('No active text editor found.');
        return;
    }

    const document = editor.document;
    const selection = editor.selection;
    const selectedText = document.getText(selection);

    const adjustedText = adjustHeadingLevel(selectedText, -1);

    await editor.edit((editBuilder) => {
        editBuilder.replace(selection, adjustedText);
    });
}