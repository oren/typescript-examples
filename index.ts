// Typescript class for storing widgets
// As long as you implement IWidget, you can be stored

interface IWidget {
	getName(): string;
	print(): void;
}

class Widget {
	private name: string

	public getName() {
		return this.name;
	}

	constructor(name: string) {
		this.name = name
	}

	print() {
		console.log(this.getName())
	}
}

class Dashboard {
	private widgets: Widget[] = [];

	constructor() {}

	addWidget(widget: Widget) {
		this.widgets[this.widgets.length] = widget
	}

	print() {
		for (let widget of this.widgets) {
			widget.print()
		}
	}
}

const dash = new Dashboard()
const widget1 = new Widget("widget1")
const widget2 = new Widget("widget2")
dash.addWidget(widget1)
dash.addWidget(widget2)
dash.print()

// => widgets:  [ 'widget1', 'widget2' ]
