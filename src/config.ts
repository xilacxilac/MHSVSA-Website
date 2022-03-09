// google analytics measurement id
const GA_TRACKING_ID = "";
const IS_PRODUCTION = process.env.NODE_ENV === "production";

type MetaType = {
	title: string;
	lang: string;
	description: string;
	url: string;
	image: string;
	tags: string[];
};

const META: MetaType = {
	title: "MHSVSA-Website",
	lang: "en-us",
	description:
		"McLean High School VSA's Website",
	url: "",
	image: "/logo.png",
	tags: [
		"vsa",
		"mhsvsa",
		"mcleanvsa",
		"mclean vsa",
		"mhs vsa",
		"mclean high school vsa",
		"mclean high school vietnamese student association",
		"mhs vietnamese student association",
	],
};

export { GA_TRACKING_ID, IS_PRODUCTION, META };
