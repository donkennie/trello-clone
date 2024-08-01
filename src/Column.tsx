import {ColumnContainer, ColumnTitle} from "./styles"
import {Card} from "./Card"

type ColumnProps = {
    text: string
}

export const Column = ({text}: ColumnProps) =>{
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            <Card text="Generate app scaffold"></Card>
            <Card text="Learn TypeScript"></Card>
            <Card text="Begin to use static typing"></Card>
        </ColumnContainer>
    )
}