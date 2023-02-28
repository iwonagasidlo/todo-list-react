import { SectionField, SectionHeader, SectionArea } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <SectionField>
        <SectionHeader>
            <SectionArea>
                {title}
                {extraHeaderContent}
            </SectionArea>
        </SectionHeader>
        {body}
    </SectionField>
);

export default Section;