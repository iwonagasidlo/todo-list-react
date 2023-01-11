import "./style.css";

const Section = ({ title, field, extraHeaderContent }) => (
    <section className="section__field">
        <header className="section__header section__area">
            <h2>{title}</h2>
            {extraHeaderContent}
        </header>
        {field}
    </section>
);

export default Section;