
let currentQuestion = 1
const totalQuestions = 20
const progress = document.getElementById("progress")
const progressText = document.getElementById("progress-text")
class UbuntexIndex {
    constructor() {
        this.questions = [{
            // empathy (25%)
            text: "A friend is organizing a neighborhood cleanup event on a weekend when you have personal plans. How likely are you to adjust your schedule to participate?",
            choices: {
                A: ["Very likely", 5],
                B: ["Likely", 4],
                C: ["Unsure", 3],
                D: ["Unlikely", 2],
                E: ["Very unlikely", 1]
            }},{
            text: "While commuting, you notice someone struggling with heavy bags. The train is crowded, and you're in a rush. How do you react?",
            choices: {
                A: ["Immediately offer help despite being in a hurry", 5],
                B: ["Offer help if no one else steps in", 4],
                C: ["Consider helping but hesitate", 3],
                D: ["Assume they will manage on their own", 2],
                E: ["Ignore the situation", 1]
            }},{
            text: "Over the past month, have you provided financial, emotional, or practical support to someone without being asked?",
            choices: {
                A: ["Yes", 5],
                B: ["No", 0]
            }},{
            text: "During a team discussion, a colleague expresses concerns about an issue affecting them. What best describes your response?",
            choices: {
                A: ["Listen carefully and offer support or solutions", 5],
                B: ["Acknowledge their concerns but remain neutral", 4],
                C: ["Listen but feel unsure how to respond", 3],
                D: ["Minimize the issue and shift the topic", 2],
                E: ["Dismiss their concerns", 1]
            }},{
            text: "Your local community is facing an issue that requires collective action. However, supporting it may mean giving up some personal convenience. How do you approach this?",
            choices: {
                A: ["Fully commit to the cause despite the inconvenience", 5],
                B: ["Support the cause while managing personal priorities", 4],
                C: ["Contribute only if it directly benefits you", 3],
                D: ["Express support but take no action", 2],
                E: ["Avoid involvement", 1]
            }},{
            // respect (25%)
            text: "When interacting with people from different backgrounds, how would someone describe your approach?",
            choices: {
                A: ["Consistently inclusive and respectful", 5],
                B: ["Generally open-minded with minor biases", 4],
                C: ["Neutral, with occasional discomfort", 3],
                D: ["Selectively open based on familiarity", 2],
                E: ["Uncomfortable or dismissive", 1]
            }},{
            text: "You witness an unfair situation, such as someone being treated unjustly at work or in public. What is your likely response?",
            choices: {
                A: ["Speak up and take action", 5],
                B: ["Support those affected but avoid confrontation", 4],
                C: ["Express concern privately", 3],
                D: ["Ignore it unless directly involved", 2],
                E: ["Avoid engagement completely", 1]
            }},{
            text: "In social settings, how mindful are you about the language and humor you use?",
            choices: {
                A: ["Always considerate and respectful", 5],
                B: ["Generally careful but sometimes slip up", 4],
                C: ["Use humor freely, adjusting only if needed", 3],
                D: ["Rarely filter words, even if offensive", 2],
                E: ["Speak without concern for others' feelings", 1]
            }},{
            text: "If you strongly disagree with someone's viewpoint, how do you usually handle the discussion?",
            choices: {
                A: ["Remain respectful and open to dialogue", 5],
                B: ["Express disagreement while trying to understand their perspective", 4],
                C: ["Defend your stance firmly but listen occasionally", 3],
                D: ["Dismiss their opinion outright", 2],
                E: ["Argue aggressively or ignore them", 1]
            }},{
            text: "Have you ever been in a situation where you had the option to escalate a conflict but chose a peaceful approach instead?",
            choices: {
                A: ["Yes", 5],
                B: ["No", 0]
            }},{
            // Dignity (20%)
            text: "When someone is struggling to assert their rights, how often do you step in to support them?",
            choices: {
                A: ["Always", 5],
                B: ["Often", 4],
                C: ["Sometimes", 3],
                D: ["Rarely", 2],
                E: ["Never", 1]
            }},{
            text: "Have you actively contributed to improving someone's life through mentoring, donations, or similar efforts?",
            choices: {
                A: ["Yes", 5],
                B: ["No", 0]
            }},{
            text: "If you had an opportunity to gain an advantage dishonestly, how would you respond?",
            choices: {
                A: ["Reject it outright", 5],
                B: ["Consider it but likely decline", 4],
                C: ["Feel conflicted but might take it", 3],
                D: ["Accept if there's little risk", 2],
                E: ["Take it without hesitation", 1]
            }},{
            text: "When interacting with others, how well do you respect personal space and boundaries?",
            choices: {
                A: ["Always respect boundaries", 5],
                B: ["Generally respectful with rare lapses", 4],
                C: ["Occasionally disregard boundaries", 3],
                D: ["Often push limits", 2],
                E: ["Rarely consider them", 1]
            }},{
            text: "Have you ever chosen to act ethically even when it resulted in personal loss?",
            choices: {
                A: ["Yes", 5],
                B: ["No", 0]
            }},{
            // Communal Responsibility (30%)
            text: "In the past six months, have you volunteered for any community service activities?",
            choices: {
                A: ["Yes", 5],
                B: ["No", 0]
            }},{
            text: "How often do you engage in civic activities such as voting, attending meetings, or advocating for change?",
            choices: {
                A: ["Regularly", 5],
                B: ["Often", 4],
                C: ["Sometimes", 3],
                D: ["Rarely", 2],
                E: ["Never", 1]
            }},{
            text: "If you saw a stranger in distress (e.g., lost or needing assistance), how would you typically respond?",
            choices: {
                A: ["Always offer help", 5],
                B: ["Help if convenient", 4],
                C: ["Assess the situation first", 3],
                D: ["Avoid involvement", 2],
                E: ["Ignore it completely", 1]
            }},{
            text: "How frequently do you engage in acts that positively impact your community or society?",
            choices: {
                A: ["Regularly", 5],
                B: ["Often", 4],
                C: ["Sometimes", 3],
                D: ["Rarely", 2],
                E: ["Never", 1]
            }},{
            text: "Have you ever initiated or actively supported a project aimed at improving communal well-being?",
            choices: {
                A: ["Yes", 5],
                B: ["No", 0]
            }}    
        ]
        this.weights = [0.25, 0.25, 0.25, 0.25, 0.25, //empathy
            0.25, 0.25, 0.25, 0.25, 0.25, //respect
            0.20, 0.20, 0.20, 0.20, 0.20, //dignity
            0.30, 0.30, 0.30, 0.30, 0.30 //communal responsibility
        ]
        this.currentIndex = 0
        this.userAnswers = []
    }

    startQuiz() {
        this.showQuestion()
    }

    showQuestion() {
        const questionContainer = document.getElementById("question")
        const optionsContainer = document.getElementById("options")
        const nextBtn = document.getElementById("next-btn")
        
        if (this.currentIndex >= this.questions.length) {
            this.calculateScore()
            return
        }
        
        const question = this.questions[this.currentIndex]
        questionContainer.textContent = `Question ${this.currentIndex + 1}: ${question.text}`
        optionsContainer.innerHTML = ""
        
        Object.entries(question.choices).forEach(([key, value]) => {
            const button = document.createElement("button")
            button.textContent = `${key}: ${value[0]}`
            button.classList.add("option-button")
            button.onclick = () => {
                this.userAnswers.push(value[1])
                console.log(this.userAnswers)
                nextBtn.disabled = false
            }
            optionsContainer.appendChild(button)
        })
        
        nextBtn.disabled = true
        nextBtn.onclick = () => {
            this.currentIndex++
            this.showQuestion()
            // progress bar
            if (currentQuestion < totalQuestions) {
                currentQuestion++
                const progressPercentage = (currentQuestion / totalQuestions) * 100
                progress.style.width = progressPercentage + "%"
                progressText.textContent = `Question ${currentQuestion} of ${totalQuestions}`
    
                if (currentQuestion === totalQuestions) {
                    nextBtn.textContent = "Submit and See Results"
                }
            }
        }
    }

    calculateScore() {
        const weightedScore = this.userAnswers.reduce((sum, val, i) => sum + val * this.weights[i], 0)
        const maxPossibleScore = this.weights.reduce((sum, weight) => sum + (5 * weight), 0)
        const finalScore = (weightedScore / maxPossibleScore) * 100
        
        this.displayResults(finalScore)
    }

    displayResults(score) {
        let classification;
        if (score <= 20) classification = "High Risk (Anti-Social)"
        else if (score <= 40) classification = "Low Ubuntu Awareness"
        else if (score <= 60) classification = "Moderate Ubuntu Awareness"
        else if (score <= 80) classification = "Strong Ubuntu Traits"
        else if (score <= 100) classification = "(Ubuntu Ambassador (High Social Contribution)"
        else classification = "Sorry, your score could not be calculated"
        
        document.getElementById("quiz-container").style.display = "none"
        const resultContainer = document.getElementById("result")
        resultContainer.style.display = "block"
        resultContainer.innerHTML = `<h2>Your Ubuntex Index Score: ${score.toFixed(2)}</h2><p>Classification: ${classification}</p>`
    }
}

const quiz = new UbuntexIndex()
quiz.startQuiz()
