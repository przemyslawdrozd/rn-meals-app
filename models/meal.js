class Meal {
	constructor(
		id,
		categoryIds,
		title,
		affodability,
		complexity,
		imageUrl,
		duration,
		ings,
		steps,
		isGluten,
		isVegatarian,
		isLactoseFree
	) {
		this.id = id;
		this.categoryIds = categoryIds;
		this.title = title;
		this.affodability = affodability;
		this.complexity = complexity;
		this.imageUrl = imageUrl;
		this.duration = duration;
		this.ings = ings;
		this.steps = steps;
		this.isGluten = isGluten;
		this.isVegatarian = isVegatarian;
		this.isLactoseFree = isLactoseFree;
	}
}

export default Meal;
