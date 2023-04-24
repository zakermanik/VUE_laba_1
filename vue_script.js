// ЗАДАНИЕ 1
const app = new Vue({
    el: '#app',
    data:{
        header:'список приглашенных',
        persons:[
                {id:0,name:'Иван',surname:'Иванов',donate:300},
                {id:1,name:'Петр',surname:'Петров',donate:200},
                {id:2,name:'Александр',surname:'Александров',donate:400},
        ]            
    },
});

// ЗАДАНИЕ 2
const prod = new Vue({ 
    el: '#prod', 
    data: {
        tov: null, 
        pcs: null, 
        val: null,
        positions: [],
    },
    methods: {
        input() {
            let pos={
                tov1:this.tov,
                pcs1:this.pcs,
                val1:this.val,
            }
            this.positions.push(pos);
        },
        delet(i) {
            this.positions.splice(i, 1)
        },
        sort() {
            this.positions.sort((a, b) => {
                return a.tov1.localeCompare(b.tov1)
            })
        }
    } 
});

// ЗАДАНИЕ 3
let check =  new Vue({
    el: '#check',
    data() {
        return{
            tasks: [],
            editedItem: null,
            newTask: '',
        }
    },
    methods: {
        addTask() {
            const text = this.newTask.trim();
            if (text) {
                this.tasks.push({ text, done: false, edit: false});
                this.newTask = '';
            }
        },
        deleteTask(i) {
            this.tasks.splice(i, 1);
        },
        editTask() {
            const input = this.$refs.item.done;
            input.focus();
            input.select();
            this.tasks.forEach((item)=>{
                if (item.done){
                    let i = this.tasks.indexOf(item);
                    let checkbox = document.querySelectorAll('input[type="checkbox"]')[i];
                    checkbox.style.display = 'none';
                }
            })
        }
    }
})

// ЗАДАНИЕ 4
const Question = {
    props: {
        question: Object,
    },
    data() {
        return {
            selectedAnswer: null,
        };
    },
    computed: {
        isCorrect() {
            return this.selectedAnswer === this.question.right - 1;
        },
    },
    methods: {
        handleSelect(answerIndex) {
            this.selectedAnswer = answerIndex;
            this.$emit('answer', this.isCorrect);
        },
    },
    template: `
        <div>
            <h2>{{ question.question }}</h2>
            <label v-for="(answer, index) in question.answers" :key="index">
            <input type="radio" :name="question.question" :value="index" @change="handleSelect(index)">
            {{ answer }}
            </label>
            <div v-if="selectedAnswer !== null" :style="{ border: isCorrect ? '2px solid green' : '2px solid red' }">
            <p v-if="isCorrect">Верно!</p>
            <p v-else>Неверно. Правильный ответ: {{ question.answers[question.right - 1] }}</p>
            </div>
        </div>
        `,
    };
  
    const que = new Vue({
        el: '#que',
        components: {
            Question,
        },
        data() {
            return {
                questions: [{
                    question: 'Вопрос 1',
                    answers: [
                        'Ответ 1',
                        'Ответ 2',
                        'Ответ 3',
                        'Ответ 4',
                        'Ответ 5',
                    ],
                    right: 1,
                    },
                    {
                    question: 'Вопрос 2',
                    answers: [
                        'Ответ 1',
                        'Ответ 2',
                        'Ответ 3',
                        'Ответ 4',
                        'Ответ 5',
                    ],
                    right: 2,
                    },
                    {
                    question: 'Вопрос 3',
                    answers: [
                        'Ответ 1',
                        'Ответ 2',
                        'Ответ 3',
                        'Ответ 4',
                        'Ответ 5',
                    ],
                    right: 3,
                    },
                    {
                    question: 'Вопрос 4',
                    answers: [
                        'Ответ 1',
                        'Ответ 2',
                        'Ответ 3',
                        'Ответ 4',
                        'Ответ 5',
                    ],
                    right: 4,
                    },
                    {
                    question: 'Вопрос 5',
                    answers: [
                        'Ответ 1',
                        'Ответ 2',
                        'Ответ 3',
                        'Ответ 4',
                        'Ответ 5',
                    ],
                    right: 5,
                    }],
                score: 0,
                currentQuestionIndex: 0,
                isFinished: false,
            };
        },
        methods: {
            handleAnswer(isCorrect) {
                if (isCorrect) {
                    this.score++;
                }
                    this.currentQuestionIndex++;
                if (this.currentQuestionIndex >= this.questions.length) {
                    this.isFinished = true;
                }
            },
            handleRestart() {
                this.score = 0;
                this.currentQuestionIndex = 0;
                this.isFinished = false;
            },
        },
        computed: {
            currentQuestion() {
                return this.questions[this.currentQuestionIndex];
            },
        },
    });
  
    