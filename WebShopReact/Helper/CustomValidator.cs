﻿using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.Collections.Generic;
using System.Linq;

namespace WebShopReact.Helper
{
    public class CustomValidator
    {
        public static List<string> getErrorsByIdentityResult(IdentityResult result)
        {
            var errors = new List<string>();

            foreach (var error in result.Errors)
            {
                errors.Add(error.Description);
            }

            return errors;
        }

        public static List<string> getErrorsByModelState(ModelStateDictionary model)
        {
            var errors = new List<string>();

            var errorCollection = model.Where(t => t.Value.Errors.Count > 0)
                .ToDictionary(
                v => v.Key,
                v => v.Value);

            foreach (var error in errorCollection)
            {
                errors.Add(error.Value.ToString());
            }

            return errors;
        }
    }
}
