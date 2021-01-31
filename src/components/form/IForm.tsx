export interface IFormProps {
	action: string;
}

export interface IValues {
	[key: string]: any;
}

export interface IErrors {
	[key: string]: string;
}

export interface State {
	values: IValues;
	errors?: IErrors;
	submitSuccess?: boolean;
}

type Editor = 'textbox' | 'multilinetextbox' | 'dropdown';

export interface IFieldProps {
	id: string;
	label?: string;
	editor?: Editor;
	options?: string[];
	value?: any;
}