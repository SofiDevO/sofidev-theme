const vscode = require('vscode');

function activate(context) {
  const themeCommands = {
    'sofidev.setTheme.SofiDev': 'SofiDev',
    'sofidev.setTheme.SofiAgust': 'SofiAgust',
    'sofidev.setTheme.SofiOceanic': 'SofiOceanic',
    'sofidev.setTheme.SofiCatppuccin': 'SofiCatppuccin',
    'sofidev.setTheme.SofiAura': 'SofiAura'
  };

  Object.entries(themeCommands).forEach(([command, theme]) => {
    let disposable = vscode.commands.registerCommand(command, () => {
      vscode.workspace.getConfiguration().update(
        'workbench.colorTheme',
        theme,
        vscode.ConfigurationTarget.Global
      );
    });
    context.subscriptions.push(disposable);
  });
}

exports.activate = activate;