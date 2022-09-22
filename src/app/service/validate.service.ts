import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  MustMatch(firstControl: AbstractControl): ValidatorFn{
    return(
      secondControl: AbstractControl
    ): { [key: string]: boolean } | null => {
      //return null if controls haven't initialised yet
      if (!firstControl && !secondControl) {
        return null;
      }

      //return null if another validator has already found an error on the matchingContol
      if (secondControl.hasError && !firstControl.hasError) {
        return null;
      }

      //set error on matchingControl if validation fails
      if (firstControl.value !== secondControl.value) {
        return {mustMatch: true};
      }else{
        return null;
      }
    }
  }

  // choose subject
  subDetails = [
    {
      id:1,
      subName:"Science",
      subDetails:"Science is the human endeavor to discover truths about the world around us. Scientists seek out answers through observation and experimentation. As we discover more and more, we are able to apply what we've learned to develop new technologies and to improve everyday life. But perhaps more importantly, as we gain knowledge through science, we are able to begin satisfying our deep-felt need to know more about ourselves.",
      subDetails2:"the intellectual and practical activity encompassing the systematic study of the structure and behaviour of the physical and natural world through observation and experiment:",
      subject:"Physical Science",
      subject2:"Life Science",
      subLink:"/physical",
      subLink2:"/lifes",
      subImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnPQsv_uSqpCp_TTG3My93TrvCBID_e9jAA&usqp=CAU",
      subImg2:"https://images.squarespace-cdn.com/content/v1/5dc10a1f74027b0583e8c429/1572995646412-WVUO7JJ9BZK3NG9NQ0RS/science+stock+photo+3.jpg?format=original"
      
    },
    {
      id:2,
      subName:"Technology",
      subDetails2:"The branch of knowledge that deals with the creation and use of technical means and their interrelation with life, society, and the environment.",
      subDetails:"Technology can be most broadly defined as the entities, both material and immaterial, created by the application of mental and physical effort in order to achieve some value. In this usage, technology refers to tools and machines that may be used to solve real-world problems.",
      subCode:"TECH-2",
      subImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR1skAh3KI1XWVo8IFDjrep6VLPqh7TiF8rQ&usqp=CAU",
      subImg2:"https://th.bing.com/th/id/R.ce2265a352fd12022a91ec1c02dab1a3?rik=luiK7ZmRGaXjAw&pid=ImgRaw&r=0"
    },
    {
      id:3,
      subName:"Mathematics",
      subDetails2:"The study of the sciences of numbers, quantities, geometry ,quality, structure, space, and change",
      subCode:"MATH-3",
      subImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2NWX-AKMZ-COK3n8_flvwd2bfDjO8T8-2CA&usqp=CAU",
      subImg2:"https://th.bing.com/th/id/OIP.ZjV6JQYfAfvu8BYF1k1RWwHaHb?pid=ImgDet&rs=1"
    },
    {
      id:4,
      subName:"Economic",
      subDetails2:"Social science that seeks to analyze and describe the production, distribution, and consumption of wealth",
      subCode:"ECON-1",
      subImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIBd1UQhigLsp4Vu4gFEaWrt8FLlP6PNfzxA&usqp=CAU",
      subImg2:"https://thumbs.dreamstime.com/z/economics-word-cloud-business-concept-60485127.jpg"
    },
    {
      id:5,
      subName:"Innovation",
      subDetails2:"The introduction of something new,a new idea,method or device.",
      subCode:"INO-5",
      subImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIlVzFdE6ZZmi3eXytb9FCZ7aMgUx3xV0L6g&usqp=CAU",
      subImg2:"https://th.bing.com/th/id/OIP.2gSgVVBFSwm5_LBLdQT9ZAHaF8?w=234&h=188&c=7&r=0&o=5&pid=1.7"
    },
    {
      id:6,
      subName:"Art",
      subDetails2:"A diverse range of human activity, and resulting product, that involves creative or imaginative talent expressive of technical proficiency, beauty, emotional power.",
      subCode:"/about",
      subImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5PanZSBwuC0VncLM3Tlw9oN29XSFhRRYg7Q&usqp=CAU",
      subVedio:"https://www.youtube.com/embed/JXoQQB0_3SM",
      math:"Math",
      subImg2:"https://th.bing.com/th/id/OIP._0GTb6y1HS8wJCo-l4SkLQAAAA?pid=ImgDet&w=259&h=200&rs=1"
    }
  ]
}