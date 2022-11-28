﻿using System;
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
        public IActionResult Survey()
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

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
