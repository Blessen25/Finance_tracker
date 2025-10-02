export interface MaincontainerProps {

    containerClass ?: string
    mainClass ?: string
    children : React.ReactNode
}

export interface ButtontextProps {

    text ?: string;
    classname ?: string;
    icon ?: React.ReactNode;
    type ?: "submit" | "reset" | "button";
    disabled ?: boolean;
    loading ?: boolean;
    fullwidth ?: boolean;
    onClick ?: () => void;
}