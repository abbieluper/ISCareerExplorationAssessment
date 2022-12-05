using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ISCareerExploration.Models;

namespace ISCareerExploration.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Survey()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Survey(Result model) // I didn't have to name it model -- I could've named it anything
        {
            return View();
        }


        public IActionResult Resources()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult DiscoverIS()
        {
            return Redirect("https://discoveris.byu.edu/");
        }

        public IActionResult ISCareersWebsite()
        {
            return Redirect("https://iscareers.byu.edu/");
        }

        public IActionResult ISCareerExplorer()
        {
            return Redirect("https://iscareers.byu.edu/career-explorer");
        }

        public IActionResult ReidTeam()
        {
            return Redirect("https://iscareers.byu.edu/ask-us-anything");
        }

        public IActionResult Top10Companies()
        {
            return Redirect("https://iscareers.byu.edu/career-explorer#%23skills-explorer-dashboard");
        }

        public IActionResult MyMap()
        {
            return Redirect("https://mymap.byu.edu");
        }

        public IActionResult InformationTechnology()
        {
            return View();
        }

        public IActionResult Development()
        {
            return View();
        }


        public IActionResult Consulting()
        {
            return View();
        }

        public IActionResult BusinessIntelligence()
        {
            return View();
        }
        public IActionResult Management()

        {
            return View();
        }


        public IActionResult Other()
        {
            return View();
        }

        public IActionResult Security()

        {
            return View();
        }



        //testing for the Survey Results Page
        //[HttpGet]
        //public IActionResult Survey()
        //{
        //    return View(new Result());
        //}
        //[HttpPost]
        //public IActionResult Survey(Result result)
        //{
        //    if
        //    ((result.Development > result.BusinessIntelligence) &&
        //    (result.Development > result.Security) &&
        //    (result.Development > result.Management) &&
        //    (result.Development > result.Consulting) &&
        //    (result.Development > result.InformationTechnology) &&
        //    (result.Development > result.Other))
        //    {
        //        return View("Development");
        //    }

        //    else if
        //    ((result.BusinessIntelligence > result.Security) &&
        //    (result.BusinessIntelligence > result.Management) &&
        //    (result.BusinessIntelligence > result.Consulting) &&
        //    (result.BusinessIntelligence > result.InformationTechnology) &&
        //    (result.BusinessIntelligence > result.Other))
        //    {
        //        return View("BusinessIntelligence");
        //    }
        //    else if
        //    ((result.Security > result.Management) &&
        //    (result.Security > result.Consulting) &&
        //    (result.Security > result.InformationTechnology) &&
        //    (result.Security > result.Other))
        //    {
        //        return View("Security");
        //    }
        //    else if
        //    ((result.Management > result.Consulting) &&
        //    (result.Management > result.InformationTechnology) &&
        //    (result.Management > result.Other))
        //    {
        //        return View("Management");
        //    }
        //    else if
        //    ((result.Consulting > result.InformationTechnology) &&
        //    (result.Consulting > result.Other))
        //    {
        //        return View("Consulting");
        //    }
        //    else if
        //    (result.InformationTechnology > result.Other)
        //    {
        //        return View("InformationTechnology");
        //    }
        //    else
        //    {
        //        return View("Other");
        //    }

        //}

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
