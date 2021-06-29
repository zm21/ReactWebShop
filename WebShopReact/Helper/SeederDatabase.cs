using DataAccess.EF;
using DataAccess.Entitty;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ReactWebShop.Shared;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace WebShopReact.Helper
{
    public class SeederDatabase
    {
        public static void SeedData(IServiceProvider services)
        {
            using (var scope = services.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var manager = scope.ServiceProvider.GetRequiredService<UserManager<AppUser>>();
                var managerRole = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
                var context = scope.ServiceProvider.GetRequiredService<EFContext>();
                SeedUsers(manager, managerRole);
            }
        }
        private static void SeedUsers(UserManager<AppUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            var roleName = ProjectRoles.Admin;
            if (roleManager.FindByNameAsync(roleName).Result == null)
            {
                var resultAdminRole = roleManager.CreateAsync(new IdentityRole
                {
                    Name = ProjectRoles.Admin
                }).Result;

                var resultUserRole = roleManager.CreateAsync(new IdentityRole
                {
                    Name = ProjectRoles.User
                }).Result;
            }

            string email = "admin@gmail.com";
            var admin = new AppUser
            {
                Email = email,
                UserName = email,
                Address = "Rivne",
                Age = 17,
                FullName = "Mykola Zaiets"
            };
            //var andrii = new User
            //{
            //    Email = "zaietsmikola.21@gmail.com",
            //    UserName = "zaietsmikola.21@gmail.com"
            //};

            var resultAdmin = userManager.CreateAsync(admin, "Qwerty1-").Result;
            resultAdmin = userManager.AddToRoleAsync(admin, ProjectRoles.Admin).Result;


            //var resultAndrii = userManager.CreateAsync(andrii, "Qwerty1-").Result;
            //resultAndrii = userManager.AddToRoleAsync(andrii, "User").Result;
        }
    }
}
