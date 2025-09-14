export default function AboutBlock({ aboutData }) {
    return (
        <section className="block about-block">
            <h2>
                {aboutData.title}
            </h2>
            <div className="about-block-content">
                {
                    aboutData.text.map((paragraph, index) => <p key={index}>{paragraph}</p>)
                }
            </div>
        </section>
    );
}