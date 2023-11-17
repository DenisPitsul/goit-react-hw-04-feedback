import classes from './Statistics.module.css'

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {

    return (
        <div className={classes.statistics}>
            <p className={classes.statisticsFeetback}>Good: {good}</p>
            <p className={classes.statisticsFeetback}>Neutral: {neutral}</p>
            <p className={classes.statisticsFeetback}>Bad: {bad}</p>
            <p className={classes.statisticsFeetback}>Total: {total}</p>
            <p className={classes.statisticsFeetback}>Positive feedback: {positivePercentage}%</p>
        </div>
    )
}

export default Statistics;