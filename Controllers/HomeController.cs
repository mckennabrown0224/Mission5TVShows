using Microsoft.AspNetCore.Mvc;

namespace Mission5TVShows.Controllers
{
    public class HomeController : Controller  //Home controller inherits from the controller class
    {
        // GET
        public IActionResult Index()  //what is returned from this is the Home page
        {
            return View();
        }

        public IActionResult Estimates() //returns the estimates page
        {
            return View();
        }
    }
}

