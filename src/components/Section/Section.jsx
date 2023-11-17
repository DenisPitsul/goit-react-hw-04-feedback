import classes from './Section.module.css'

export const Section = ({title, children}) => {

    return (
        <section className={classes.feedbackSection}>
            <h1 className={classes.feedbackSectionTitle}>{title}</h1>
            {children}
        </section>
    )
}

export default Section;