import { SkillName } from "../general/Skills";

export interface ITemplate {
    name: string;
    description: string;
    skillOptions: SkillName[];
}
export interface IBackground {
    name: string;
    ageRange: [number, number];
    description: string;
    templates: ITemplate[];
    pickRaise: number[];
}

const Starborn: ITemplate = {
    name: 'starborn',
    description: 'You grew among the stars, living on space stations and star ships has given you a unique perspective.',
    skillOptions: ['acrobatics', 'computer', 'electronics', 'general knowledge', 'mechanics', 'pilot', 'science', 'explosives', 'investigation', 'intimidation', 'persuation', 'subtrefuge']
};

const Schooled: ITemplate = {
    name: 'schooled',
    description: 'Your formative years was spent in public or private school. You were forced to interact with strangers and made friends',
    skillOptions: ['athletics', 'computer', 'cooking', 'empathy', 'general knowledge', 'science', 'streetwise', 'survival', 'intimidation', 'persuation', 'subtrefuge']
};

const Homeschooled: ITemplate = {
    name: 'homeschooled',
    description: 'You went to school, but it was through a private tutor, a parent or a program that taught you everyting. You had to sneak out if you wanted to interact with the wider world',
    skillOptions: ['athletics', 'acrobatics', 'cooking', 'investigation', 'science', 'streetwise', 'survival', 'computer', 'subtrefuge']
};

const Orphan: ITemplate = {
    name: 'street orphan',
    description: 'You were a street orphan and didnt benefit from formal education. Youve learned what you know in lifes hard school of reality.',
    skillOptions: ['athletics', 'combat', 'cooking', 'empathy', 'intimidation', 'larceny', 'stealth', 'survival', 'subtrefuge', 'persuation']
};

const TribalChildhood: ITemplate = {
    name: 'tribal',
    description: 'You grew up in a tribal society, either as a nomadic hunter gatherer or a primitive farmer.',
    skillOptions: ['athletics', 'acrobatics', 'cooking', 'empathy', 'stealth', 'survival', 'combat', 'intimidation', 'investigation', 'medicine']
};

export const EarlyChildhoodBackground: IBackground = {
    name: 'Early Childhood',
    description: 'This concerns your early childhood, where you were born and grew up may limit your options.',
    ageRange: [0, 9],
    templates: [Starborn, Schooled, Homeschooled, Orphan, TribalChildhood],
    pickRaise: [2, 2, 3, 3, 4, 4]
};

const ScientificHighschool: ITemplate = {
    name: 'Scientific Highschool',
    description: 'You went to a scientific oriented highschool. You get items based on skills and may have a rented apartment. You may enter into debt x10',
    skillOptions: ['athletics', 'computer', 'electronics', 'explosives', 'general knowledge', 'mechanics', 'medicine', 'savoir-faire', 'science', 'pilot']
}

const LiberalArtsHighschool: ITemplate = {
    name: 'Liberal Arts Highschool',
    description: 'You went to study the liberal arts. You get items based on skills and may have a rented apartment. You may enter into debt x10',
    skillOptions: ['computer', 'general knowledge', 'investigation', 'medicine', 'persuation', 'subtrefuge', 'savoir-faire', 'science', 'athletics', 'pilot']
}

const TradeSchool: ITemplate = {
    name: 'Trade School',
    description: 'You chose a trade school to gain an early start at a decent paying job. You get items based on skills and may have a rented apartment. You may enter into debt x5',
    skillOptions: ['computer', 'cooking', 'electronics', 'general knowledge', 'investigation', 'mechanics', 'persuation', 'pilot', 'streetwise', 'combat', 'firearms']
}

const UnskilledLabor: ITemplate = {
    name: 'Unskilled Labor',
    description: 'You either finished mandatory grade school or dropped out, either way you started working in unskilled labor at a young age. You get items based on skill and may have a rented apartment.',
    skillOptions: ['athletics', 'acrobatics', 'empathy', 'cooking', 'computer', 'larceny', 'pilot', 'streetwise', 'firearms', 'general knowledge', 'intimidation', 'investigation']
}

const MurderHobo: ITemplate = {
    name: 'Penhandler/Hobo',
    description: 'You either finished mandatory grade school or dropped out or never attended, either way you are now homeless. You have either begged for money or traveled from place to place doing gig jobs. You get items based on skill.',
    skillOptions: ['combat', 'computer', 'cooking', 'firearms', 'general knowledge', 'larceny', 'stealth', 'streetwise', 'survival', 'acrobatics', 'athletics', 'intimidation', 'persuation', 'subtrefuge']
}

const TribalYouth: ITemplate = {
    name: 'Tribal',
    description: 'You have become a contributing member of your tribe, you own have a permanent home appropriate for your tribe and have appropriate tribal items.',
    skillOptions: ['athletics', 'acrobatics', 'combat', 'cooking', 'empathy', 'stealth', 'survival','intimidation','persuation','subtrefuge','investigation']
}

export const YouthBackground: IBackground = {
    name: 'Youth',
    description: 'How you spent your early teens to early adulthood can drastically change your trajectory in life.',
    ageRange: [10, 24],
    pickRaise: [2, 2, 3, 3, 4, 4],
    templates: [ScientificHighschool, LiberalArtsHighschool, TradeSchool, UnskilledLabor, MurderHobo, TribalYouth],
};

const HigherEducationWork: ITemplate = {
    name: 'Higher Education / Work',
    description: 'You went on to take a university degree and begin a relevant high paying job, recommended that you took scientific or liberal arts. You gain additional items based on your job. Your debt capacity increases by x5. Your job may afford you privileges',
    skillOptions: ['computer', 'cooking', 'electronics', 'empathy', 'explosives', 'general knowledge', 'investigation', 'mechanics', 'medicine', 'pilot', 'savoir-faire', 'science'],
};

const SkilledLabor: ITemplate = {
    name: 'Skilled Labor',
    description: 'You finished highschool or trade school and took or continued with your skilled trade. You gain additional items based on job, your job may afford you privileges',
    skillOptions: ['athletics', 'computer', 'cooking', 'electronics', 'empathy', 'firearms', 'explosives', 'general knowledge', 'investigation', 'mechanics', 'persuation', 'pilot', 'savoir-faire', 'streetwise'],
};

const UnskilledLaborAdult: ITemplate = {
    name: 'Unskilled labor',
    description: 'You continued to toil away for a low wage unskilled job, you gain additional items based on job. Job affords few (if any) privileges',
    skillOptions: ['acrobatics', 'athletics', 'combat', 'computer', 'cooking', 'empathy', 'general knowledge', 'persuation', 'pilot', 'streetwise'],
};

const AdultManchild: ITemplate = {
    name: 'Penhandler / MurderHobo',
    description: 'Either through choice or bad luck you are homeless and beg for money or travel to do gig jobs. No privileges.',
    skillOptions: ['athletics', 'combat', 'cooking', 'firearms', 'empathy', 'investigation', 'larceny', 'pilot', 'streetwise', 'subtrefuge'],
};

const TribalAdult: ITemplate = {
    name: 'Tribal',
    description: 'You continue to be a contributing member of your tribe, working your way up to elder soon. Your position may afford you tribal privileges and items.',
    skillOptions: ['athletics', 'acrobatics', 'combat', 'firearms', 'empathy', 'intimidation', 'persuation', 'stealth', 'subtrefuge', 'survival'],
};

export const AdultBackground: IBackground = {
    name: 'Adulthood',
    description: 'If your character is older than 25 then they must choose an adult background. Beyond 40 is complete free form.',
    ageRange: [25, 39],
    pickRaise: [2, 2, 3, 3, 4, 4],
    templates: [HigherEducationWork, SkilledLabor, UnskilledLaborAdult, AdultManchild, TribalAdult]
};



const Backgrounds = [EarlyChildhoodBackground, YouthBackground, AdultBackground];

export default Backgrounds;