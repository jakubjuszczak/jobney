import { envsafe, str, email, url } from 'envsafe';

export const env = envsafe({
	NODE_ENV: str({
		devDefault: 'development',
		choices: ['development', 'test', 'production'],
	}),
	SMTP_HOST: str({
		devDefault: 'localhost',
	}),
	SMTP_USER: email({
		devDefault: 'system@jobney.ct8.pl',
	}),
	SMTP_PASSWORD: str({
		devDefault: 'example_password',
	}),
	DATABASE_URL: url({
		devDefault: 'postgresql://postgres:postgres@localhost:5432/planotes',
	}),
});
