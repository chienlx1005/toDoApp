
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// get element
var root = $('#root')

const jo  = localStorage.getItem('jobs')

const jobs = jo == null  ? [] : jo.split(',')

const app ={
    getData: function(){
        const jo  = localStorage.getItem('jobs')

        const jobs = jo == null ? [] : jo.split(',')    
    },
    handleBtn: function(){
        var checkJob = $$('.checkJob')
        const addJob = $('.form-input')
        const apply = $('.apply')
        var del = $$('.del')
        var j = $$('.job')
        // xu ly chon job
        checkJob.forEach((item,index) => {
            item.onclick = () => {
                j[index].classList.toggle('active')
                console.log(12)
            }
        });

        // xu ly them job
        apply.onclick = ()=> {
            if(addJob.value != ""){
                jobs.push(addJob.value)
                localStorage.setItem('jobs',jobs)
                this.render()
                console.log('them thanh cong')
            }
            else{
                console.log('du lieu trong')
            }
        }
        // xu ly xoa
        del.forEach((d,index)=> {
            d.onclick =() => {
                console.log('before:', jobs)
                jobs.splice(index,1)
                console.log('after delete:' , jobs)
                localStorage.setItem('jobs',jobs)
                
                this.render()
            }
        })
        
    },
    
    render: function(){
       
       
        console.log(jobs)
        // return;
        var htmls = jobs.map((job,index) => {
            return `<div class="job">
            <input type="checkbox" class="checkJob"/>
            <label >${job}</label
            >
            <p class="material-icons-outlined del">delete</p>
          </div>`
        })

        root.innerHTML = htmls.join('')
        this.handleBtn()
    },
    start: function (){
        this.render()
        this.handleBtn()
    }

}
app.start()
