/* ============================================================
   ELITE ACADEMY — form.js
   Enquiry form validation, demo submission flow,
   program preselect from program/pricing buttons
   ============================================================ */
(function () {
  'use strict';

  var form = document.getElementById('enquiry-form');
  var successPanel = document.getElementById('form-success');
  var resetButton = document.getElementById('form-reset');
  var programSelect = document.getElementById('program');

  /* Validation rules — return true when valid, or an error message */
  var validators = {
    name: function (value) {
      return value.trim().length >= 2 || 'Please enter your full name.';
    },
    phone: function (value) {
      var digits = value.replace(/[\s\-+().]/g, '');
      return /^(?:\+?91|0)?[6-9]\d{9}$/.test(digits) ||
        'Please enter a valid Indian mobile number (e.g. 98765 43210).';
    },
    email: function (value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()) ||
        'Please enter a valid email address.';
    },
    program: function (value) {
      return value !== '' || 'Please choose a program.';
    },
    message: function (value) {
      return value.trim().length >= 10 ||
        'Please add a little more detail (at least 10 characters).';
    }
  };

  var fields = ['name', 'phone', 'email', 'program', 'message'];

  function fieldWrapper(name) {
    return document.getElementById(name).closest('.field');
  }

  function errorEl(name) {
    return document.getElementById(name + '-error');
  }

  function showError(name, message) {
    var wrapper = fieldWrapper(name);
    var error = errorEl(name);
    if (wrapper) wrapper.classList.add('has-error');
    if (error) error.textContent = message;
  }

  function clearError(name) {
    var wrapper = fieldWrapper(name);
    var error = errorEl(name);
    if (wrapper) wrapper.classList.remove('has-error');
    if (error) error.textContent = '';
  }

  function validateField(name) {
    var input = document.getElementById(name);
    var result = validators[name](input.value);
    if (result === true) {
      clearError(name);
      return true;
    }
    showError(name, result);
    return false;
  }

  function validateAll() {
    var allValid = true;
    fields.forEach(function (name) {
      if (!validateField(name)) {
        allValid = false;
      }
    });
    return allValid;
  }

  function showSuccess() {
    form.hidden = true;
    successPanel.hidden = false;
    successPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function resetForm() {
    form.reset();
    fields.forEach(clearError);
    form.hidden = false;
    successPanel.hidden = true;
    document.getElementById('name').focus();
  }

  /* Preselect a program when enquiring from a card / button */
  function preselectProgram(programName) {
    if (!programSelect) return;
    var matched = false;
    Array.prototype.forEach.call(programSelect.options, function (option) {
      if (option.value === programName) {
        option.selected = true;
        matched = true;
      }
    });
    if (matched) {
      clearError('program');
    }
  }

  function scrollToContact() {
    var contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function init() {
    if (!form) return;

    /* Live validation on blur, clear on input */
    fields.forEach(function (name) {
      var input = document.getElementById(name);
      input.addEventListener('blur', function () {
        validateField(name);
      });
      input.addEventListener('input', function () {
        if (fieldWrapper(name).classList.contains('has-error')) {
          validateField(name);
        }
      });
      if (input.tagName === 'SELECT') {
        input.addEventListener('change', function () {
          validateField(name);
        });
      }
    });

    /* Submit */
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!validateAll()) {
        /* Focus the first invalid field */
        for (var i = 0; i < fields.length; i += 1) {
          if (fieldWrapper(fields[i]).classList.contains('has-error')) {
            document.getElementById(fields[i]).focus();
            break;
          }
        }
        return;
      }
      showSuccess();
    });

    /* Reset for another enquiry */
    if (resetButton) {
      resetButton.addEventListener('click', resetForm);
    }

    /* Preselect program from program cards, pricing cards, hero & nav CTAs */
    var enquireButtons = Array.prototype.slice.call(document.querySelectorAll('.js-enquire'));
    enquireButtons.forEach(function (button) {
      button.addEventListener('click', function (event) {
        var programName = button.getAttribute('data-program');
        if (programName) {
          event.preventDefault();
          preselectProgram(programName);
          scrollToContact();
          window.setTimeout(function () {
            var contact = document.getElementById('contact');
            if (contact) {
              var firstField = contact.querySelector('input, select');
              if (firstField) firstField.focus({ preventScroll: true });
            }
          }, 700);
        }
      });
    });
  }

  window.EliteAcademy = window.EliteAcademy || {};
  EliteAcademy.form = { init: init };
})();
