<template>
	<div class="active-skills">
		<h4 class="my-5">Active</h4>

		<div class="skills">
			<b-row>
				<b-col v-for="(skill, i) in skills" :key="i" cols="6" lg="12">
					<active-skill
						:skill="skill.skill"
						:rune="skill.rune"
						:slot-num="i + 1"
					/>
				</b-col>
			</b-row>
		</div>
	</div>
</template>

<script>
import ActiveSkill from "./ActiveSkill"

export default {
	name: "ActiveSkills",

	components: { ActiveSkill },

	props: {
		skills: {
			required: true,
			type: Array,
		},
	},
}
</script>

<style></style>
