enyo.kind({
	name: "moon.sample.ContextualPopupSample",
	classes: "moon enyo-unselectable enyo-fit",
	components: [
		{kind: "enyo.Spotlight"},
		{kind: "moon.ContextualPopupDecorator", style:"position: absolute; left: 0px; top: 0px;", components: [
			{content: "Average"},
			{kind: "moon.ContextualPopup", classes: "moon-2h moon-1v",
				components: [
					{content:"Item 1"},
					{content:"Item 2"},
					{content:"Item 3"},
					{content:"Item 4"},
					{content:"Item 5"}
				]
			}
		]},
		{kind: "moon.ContextualPopupDecorator", style:"position: absolute; right: 0px; top: 0px;", components: [
			{content:"Small"},
			{kind: "moon.ContextualPopup"}
		]},
		{kind: "moon.ContextualPopupDecorator", style:"position: absolute; left: 0px; top: 45%;", components: [
			{content: "Wide"},
			{kind: "moon.ContextualPopup", classes: "moon-6h moon-1v",
				components: [
					{kind: "Scroller", horizontal:"auto",  touch:true, thumb:false, classes: "enyo-fill", components:[
						{content:"testing 1"},
						{content:"testing 2"}
					]}
				]
			}
		]},
		{kind: "moon.ContextualPopupDecorator", style:"position: absolute; right: 0px; top: 45%;", components: [
			{content:"Long"},
			{kind: "moon.ContextualPopup",
				components: [
					{content:"testing 1"},
					{content:"testing 2"},
					{content:"testing 3"},
					{content:"testing 4"},
					{content:"testing 5"},
					{content:"testing 6"},
					{content:"testing 7"},
					{content:"testing 9"},
					{content:"testing 10"},
					{content:"testing 11"},
					{content:"testing 12"},
					{content:"testing 13"},
					{content:"testing 14"},
					{content:"testing 15"},
					{content:"testing 16"},
					{content:"testing 17"},
					{content:"testing 18"},
					{content:"testing 19"},
					{content:"testing 20"},
					{content:"testing 21"},
					{content:"testing 22"},
					{content:"testing 23"},
					{content:"testing 24"},
					{content:"testing 25"},
					{content:"testing 26"},
					{content:"testing 27"},
					{content:"testing 28"},
					{content:"testing 29"},
					{content:"testing 30"}
				]
			}
		]},
		{kind: "moon.ContextualPopupDecorator", style: "position: absolute; left: 0px; bottom: 0px;", components: [
			{content: "Spotlight Modal"},
			{kind: "moon.ContextualPopup", name: "buttonPopup", classes: "moon-6h moon-2v", spotlightModal: true,
				components: [
					{kind: "Scroller", horizontal: "auto", touch: true, thumb: false, classes: "enyo-fill", components: [
						{tag: "br"},
						{content: "This is a contextual popup with spottable controls,<br />using a spotlightModal:true property.", allowHtml: true},
						{tag: "br"},
						{content: "Spotlight restricts 5-way focus to the popup, and action must be taken to close the popup."},
						{tag: "br"},
						{kind: "moon.Button", content: "Button"},
						{kind: "moon.ToggleButton", content: "SpotlightModal", active: true, ontap: "buttonToggled"},
						{tag: "br"},
						{tag: "br"},
						{kind: "moon.InputDecorator", spotlight: true, components: [
							{kind: "moon.Input", placeholder: "USERNAME"}
						]}
					]}
				]
			}
		]},
		{kind: "moon.ContextualPopupDecorator", style: "position: absolute; right: 0px; bottom: 0px;", components: [
			{content: "Spottable"},
			{kind: "moon.ContextualPopup", classes: "moon-6h moon-2v", style: "height:270px;",
				components: [
					{kind: "Scroller", horizontal: "auto", touch: true, thumb: false, classes: "enyo-fill", components: [
						{tag: "br"},
						{content: "This is a contextual popup with spottable controls, using<br />a default spotlightModal:false property.", allowHtml: true},
						{tag: "br"},
						{content: "The popup remains active as long as you navigate within it. When you navigate outside of the popup, the popup will close."},
						{tag: "br"},
						{kind: "moon.Button", content: "Button 1"},
						{kind: "moon.Button", content: "Button 2"},
						{kind: "moon.Button", content: "Button 3"}
					]}
				]
			}
		]}
	],
	buttonToggled: function(inSender, inEvent) {
		this.$.buttonPopup.setSpotlightModal(inSender.getActive());
	}
});