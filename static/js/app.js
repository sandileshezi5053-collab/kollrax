(function () {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navPanel = document.querySelector("[data-nav-panel]");

  if (navToggle && navPanel) {
    navToggle.addEventListener("click", () => {
      navPanel.classList.toggle("hidden");
    });
  }

  const stepPanels = Array.from(document.querySelectorAll("[data-contact-step-panel]"));
  const stepButtons = Array.from(document.querySelectorAll("[data-contact-step-btn]"));
  const prevButton = document.querySelector("[data-contact-prev]");
  const nextButton = document.querySelector("[data-contact-next]");
  const submitButton = document.querySelector("[data-contact-submit]");
  const stepIndicator = document.querySelector("[data-contact-step-indicator]");
  const progressBar = document.querySelector("[data-contact-progress]");
  const progressLabel = document.querySelector("[data-contact-progress-label]");
  const helpLabel = document.querySelector("[data-contact-step-help]");

  if (stepPanels.length && stepButtons.length) {
    let currentStep = 1;

    const renderStep = (step) => {
      currentStep = step;
      stepPanels.forEach((panel) => {
        panel.classList.toggle("hidden", panel.getAttribute("data-contact-step-panel") !== String(step));
      });
      stepButtons.forEach((button) => {
        const active = button.getAttribute("data-contact-step-btn") === String(step);
        button.className = active
          ? "rounded-2xl border px-4 py-3 text-left text-sm border-[#74b4d9] bg-[#f3faff] text-[#103678]"
          : "rounded-2xl border px-4 py-3 text-left text-sm border-[#103678]/10 bg-white text-[#103678]/72";
      });
      if (stepIndicator) stepIndicator.textContent = String(step);
      if (progressBar) progressBar.style.width = `${(step / 4) * 100}%`;
      if (progressLabel) progressLabel.textContent = `${Math.round((step / 4) * 100)}% complete`;
      if (helpLabel) {
        helpLabel.textContent =
          step < 4 ? "Complete this step to keep moving." : "Everything looks good. Submit when ready.";
      }
      if (prevButton) prevButton.classList.toggle("hidden", step === 1);
      if (nextButton) nextButton.classList.toggle("hidden", step === 4);
      if (submitButton) submitButton.classList.toggle("hidden", step !== 4);
    };

    stepButtons.forEach((button) => {
      button.addEventListener("click", () => renderStep(Number(button.getAttribute("data-contact-step-btn"))));
    });
    if (prevButton) prevButton.addEventListener("click", () => renderStep(Math.max(1, currentStep - 1)));
    if (nextButton) nextButton.addEventListener("click", () => renderStep(Math.min(4, currentStep + 1)));
    renderStep(1);
  }

  const billingRoot = document.querySelector("[data-billing-root]");
  if (billingRoot) {
    const plans = JSON.parse(billingRoot.dataset.billingPlans || "[]");
    const planMap = Object.fromEntries(plans.map((plan) => [plan.id, plan]));
    const planInput = billingRoot.querySelector("[data-billing-plan-input]");
    const userCountInput = billingRoot.querySelector("[data-billing-users]");
    const addonInputs = Array.from(billingRoot.querySelectorAll("[data-billing-addon]"));
    const planCards = Array.from(billingRoot.querySelectorAll("[data-billing-plan-card]"));
    const monthlyEl = billingRoot.querySelector("[data-billing-monthly]");
    
    const addonTotalEl = billingRoot.querySelector("[data-billing-addon-total]");
    const firstPaymentEl = billingRoot.querySelector("[data-billing-first-payment]");
    const planTitleEl = billingRoot.querySelector("[data-billing-plan-title]");
    const planSummaryEl = billingRoot.querySelector("[data-billing-plan-summary]");
    const planNoteEl = billingRoot.querySelector("[data-billing-plan-note]");
    const userCountEl = billingRoot.querySelector("[data-billing-user-count]");
    const submitButton = billingRoot.querySelector("[data-billing-submit]");
    const monthlyLabelEl = billingRoot.querySelector("[data-billing-monthly-label]");
    const onboardingFee = Number(billingRoot.dataset.onboardingFee || "0");

    const initialPlan = billingRoot.dataset.selectedPlan || planInput?.value || plans[0]?.id || "starter";
    const initialUserCount = Number(billingRoot.dataset.selectedUserCount || userCountInput?.value || "3");

    const formatMoney = (value) =>
      `\u20A6${new Intl.NumberFormat("en-NG", { maximumFractionDigits: 0 }).format(Math.round(value || 0))}`;

    const getAddonPrice = (input) => Number(input.dataset.priceMin || "0");

    const renderBilling = () => {
      const planId = planInput?.value || initialPlan;
      const plan = planMap[planId] || plans[0];
      if (!plan) return;

      const minimumUsers = Number(plan.minimum_users || 1);
      let userCount = Number(userCountInput?.value || initialUserCount || 1);
      if (!Number.isFinite(userCount) || userCount < minimumUsers) {
        userCount = minimumUsers;
        if (userCountInput) userCountInput.value = String(userCount);
      }

      const addonTotal = addonInputs.reduce((sum, input) => sum + (input.checked ? getAddonPrice(input) : 0), 0);
      const isEnterprise = planId === "enterprise";

      let monthlyValue = 0;
      let monthlyLabel = "Monthly recurring";
      let monthlyText = "";
      let submitText = plan.cta_label || "Continue to payment";

      if (isEnterprise) {
        const minMonthly = Number(plan.price_per_user_min || 0) * userCount;
        const maxMonthly = Number(plan.price_per_user_max || 0) * userCount;
        monthlyValue = minMonthly;
        monthlyLabel = "Estimated monthly";
        monthlyText = `${formatMoney(minMonthly)} - ${formatMoney(maxMonthly)}`;
        submitText = "Request enterprise quote";
      } else {
        const monthlyBase = Number(plan.price_per_user || 0) * userCount;
        const minimumMonthly = Number(plan.minimum_monthly || 0);
        monthlyValue = Math.max(monthlyBase, minimumMonthly);
        monthlyText = formatMoney(monthlyValue);
      }

      const firstPayment = monthlyValue + addonTotal;

      if (planTitleEl) planTitleEl.textContent = plan.name || "";
      if (planSummaryEl) planSummaryEl.textContent = plan.summary || "";
      if (planNoteEl) planNoteEl.textContent = plan.note || "";
      if (userCountEl) userCountEl.textContent = String(userCount);
      if (monthlyLabelEl) monthlyLabelEl.textContent = monthlyLabel;
      if (monthlyEl) monthlyEl.textContent = monthlyText;
      
      if (addonTotalEl) addonTotalEl.textContent = formatMoney(addonTotal);
      if (firstPaymentEl) firstPaymentEl.textContent = formatMoney(firstPayment);
      if (submitButton) submitButton.textContent = submitText;

      planCards.forEach((card) => {
        const active = card.getAttribute("data-billing-plan-card") === planId;
        card.classList.toggle("is-selected", active);
      });
    };

    const setPlan = (planId) => {
      if (planInput) planInput.value = planId;
      renderBilling();
    };

    planCards.forEach((card) => {
      card.addEventListener("click", () => setPlan(card.getAttribute("data-billing-plan-card")));
    });

    if (userCountInput) {
      userCountInput.addEventListener("input", renderBilling);
      userCountInput.addEventListener("change", renderBilling);
    }

    addonInputs.forEach((input) => input.addEventListener("change", renderBilling));

    renderBilling();
  }

  const collapseToggles = document.querySelectorAll("[data-collapse-toggle]");
  collapseToggles.forEach((toggle) => {
    const target = toggle.getAttribute("data-collapse-toggle");
    const panel = document.querySelector(`[data-collapse-panel="${target}"]`);
    const chevron = document.querySelector(`[data-collapse-chevron="${target}"]`);
    if (!panel || !chevron) return;

    toggle.addEventListener("click", () => {
      panel.classList.toggle("hidden");
      chevron.classList.toggle("-rotate-90");
    });
  });

  // Avatar preview removed by request; file input still submits to server if provided.
  // Stagger entrance animations: remove and re-add classes so animations play reliably.
  document.addEventListener("DOMContentLoaded", () => {
    const stagger = (selector, baseDelay, step) => {
      const els = Array.from(document.querySelectorAll(selector));
      els.forEach((el, i) => {
        // remove class to ensure reflow
        el.classList.remove(selector.replace('.', ''));
        setTimeout(() => {
          el.style.animationDelay = `${baseDelay + i * step}ms`;
          // force reflow then re-add class
          void el.offsetWidth;
          el.classList.add(selector.replace('.', ''));
        }, baseDelay + i * step + 10);
      });
    };

    stagger('.animate-fade-in', 40, 80);
    stagger('.animate-pop', 20, 45);

    const pageLoader = document.getElementById('page-loader');
    if (pageLoader) {
      const loaderStart = Date.now();
      const removeLoader = () => {
        pageLoader.classList.add('page-loader-hidden');
        setTimeout(() => {
          if (pageLoader.parentNode) {
            pageLoader.parentNode.removeChild(pageLoader);
          }
        }, 500);
      };

      const showMinimum = 1200; // minimum visible time in ms
      const maxLoaderTimeout = setTimeout(removeLoader, 5000);

      window.addEventListener('load', () => {
        clearTimeout(maxLoaderTimeout);
        const elapsed = Date.now() - loaderStart;
        const remaining = Math.max(0, showMinimum - elapsed);
        setTimeout(removeLoader, remaining);
      });
    }
  });

})();
