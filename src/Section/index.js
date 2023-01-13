import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section__field">
        <header className="section__header section__area">
            <h2>{title}</h2>
            {extraHeaderContent}
        </header>
        {body}
    </section>
);

export default Section;