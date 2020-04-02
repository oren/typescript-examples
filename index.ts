// Typescript class for storing widgets

class Dashboard {
	widgets: string[] = [];

	constructor() {}

	addWidget(widget: string) {
		this.widgets[this.widgets.length] = widget
	}

	print() {
		console.log("widgets: ", this.widgets)
	}
}

const dash = new Dashboard()
dash.addWidget("widget1")
dash.addWidget("widget2")
dash.print()

// => widgets:  [ 'widget1', 'widget2' ]
