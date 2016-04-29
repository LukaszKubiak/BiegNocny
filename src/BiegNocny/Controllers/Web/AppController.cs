using Microsoft.AspNet.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BiegNocny.Controllers.Web
{
    public class AppController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult ViewPoints()
        {
            return View();
        }
        public IActionResult AddPoint()
        {
            return View();
        }
        public IActionResult Map()
        {
            return View();
        }
    public IActionResult Users()
    {
        return View();
    }

}
}
