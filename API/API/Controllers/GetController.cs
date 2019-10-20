using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using API.Models;

namespace API.Controllers
{
    public class GetController : Controller
    {
        //get api controller
        public Condicoes Get()
        {
            Condicoes condicoes = new Condicoes();
            return condicoes;
        }
    }
}
