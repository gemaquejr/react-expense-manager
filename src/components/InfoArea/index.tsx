import * as C from './styles'

export const InfoArea = () => {
    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={() => {}}>⬅️</C.MonthArrow>
                <C.MonthTitle>...</C.MonthTitle>
                <C.MonthArrow onClick={() => {}}>➡️</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                ...
            </C.ResumeArea>
        </C.Container>
    );
}