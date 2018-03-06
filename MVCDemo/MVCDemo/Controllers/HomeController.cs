using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MVCDemo.Models;

namespace MVCDemo.Controllers
{
    public class HomeController : Controller
    {

        List<Person> persons = new List<Person>
            {
                new Person(){ Id = 1, Name = "Carlos" , Age = 30 , Address = "Mi casa" } ,
                new Person(){ Id = 1, Name = "Julieta" , Age = 30 , Address = "Tambien" },
                new Person(){ Id = 1, Name = "Oliver" , Age = 3 , Address = "En mi casa" },
                new Person(){ Id = 1, Name = "Tamara" , Age = 13 , Address = "En mi casa" },
                new Person(){ Id = 1, Name = "Dulce" , Age = 12 , Address = "En mi casa tambien" }
            };

        public IActionResult Index()
        {
            return View(persons);
        }

        public IActionResult Other()
        {
            return View();
        }

        public IActionResult Details(Person person)
        {
            return View(person);
        }

        public IActionResult Create()
        {
            return View();
        }

        public IActionResult Save(Person person)
        {
            persons.Add(person);
            return View("Index", persons);
        }

    }

    
}