const questionsData = [
  {
    id: 1,
    question: "Which statement best defines a Problem Statement?",
    options: {
      A: "A detailed list of project tasks",
      B: "A clear description of an issue, challenge, or gap that identifies the problem and the need for action",
      C: "A proposed budget for a project",
      D: "A final report describing the solution"
    },
    correct: "B",
    explanation_en: "It clearly describes the issue or gap and defines the need for an effective solution and action.",
    explanation_ar: "توضح صياغة المشكلة (Problem Statement) الفجوة أو التحدي بدقة، وتحدد ماهية المشكلة والحاجة الماسة لاتخاذ إجراء ووضع حل فعال لها.",
    source: "PDF p. 1 — Slide 2"
  },
  {
    id: 2,
    question: "A good Problem Statement should explain:",
    options: {
      A: "Only the proposed solution",
      B: "The issue and why it needs attention",
      C: "The project schedule only",
      D: "The personal opinions of the team"
    },
    correct: "B",
    explanation_en: "A good statement clearly explains the issue and why it needs attention.",
    explanation_ar: "صياغة المشكلة الجيدة تشرح بوضوح طبيعة المشكلة أو التحدي، وتوضح أسباب وجوب الاهتمام بها والتعامل معها.",
    source: "PDF p. 2 — Slide 3"
  },
  {
    id: 3,
    question: "Which qualities should a good Problem Statement have?",
    options: {
      A: "Complex, broad, and subjective",
      B: "Simple, specific, and objective",
      C: "Long, technical, and emotional",
      D: "Vague, general, and solution-focused"
    },
    correct: "B",
    explanation_en: "The slide says the challenge should be defined in a simple, specific, and objective way.",
    explanation_ar: "تنص السلايدات على أن صياغة المشكلة يجب أن تتميز بأن تكون بسيطة، محددة، وموضوعية غير منحازة (Simple, Specific, and Objective).",
    source: "PDF p. 2 — Slide 3"
  },
  {
    id: 4,
    question: "Which of the following is NOT one of the five Ws listed for an effective Problem Statement?",
    options: {
      A: "Who is affected?",
      B: "Where does it occur?",
      C: "How much will the solution cost?",
      D: "Why is solving it important?"
    },
    correct: "C",
    explanation_en: "The five questions are Who, What, Where, When, and Why; cost is not one of them.",
    explanation_ar: "الأسئلة الخمسة (5 Ws) لصياغة المشكلة هي: من، ماذا، أين، متى، ولماذا (Who, What, Where, When, Why)؛ وتكلفة الحل ليست واحدة منها.",
    source: "PDF p. 2 — Slide 3"
  },
  {
    id: 5,
    question: "Why are Problem Statements important for clarifying focus?",
    options: {
      A: "They encourage teams to treat symptoms only",
      B: "They prevent teams from understanding the issue",
      C: "They help teams understand the issue and avoid tackling symptoms instead of root causes",
      D: "They replace the need for project goals"
    },
    correct: "C",
    explanation_en: "Clarifying focus means understanding the issue deeply and avoiding symptom-only treatment.",
    explanation_ar: "توضيح التركيز يساعد فرق العمل على فهم جوهر المشكلة الحقيقية بعمق، وتجنب الانشغال بعلاج الأعراض السطحية بدلاً من الأسباب الجذرية.",
    source: "PDF p. 3 — Slide 4"
  },
  {
    id: 6,
    question: "How can a Problem Statement enhance communication?",
    options: {
      A: "By hiding the issue from stakeholders",
      B: "By aligning stakeholders, team members, and sponsors on what is being solved and why",
      C: "By reducing all communication to one person",
      D: "By removing the need for documentation"
    },
    correct: "B",
    explanation_en: "A clear statement aligns the involved people on the problem and its importance.",
    explanation_ar: "الصياغة الواضحة للمشكلة تعزز التواصل من خلال توحيد رؤية أصحاب المصلحة، وأعضاء الفريق، والداعمين حول ما يتم حله وسبب أهميته.",
    source: "PDF p. 3 — Slide 4"
  },
  {
    id: 7,
    question: "Which sequence matches the key steps for writing a Problem Statement?",
    options: {
      A: "Find the solution → identify the team → estimate cost → launch",
      B: "Identify the problem → put it into context → find the root cause → describe the ideal outcome → propose a solution and outline benefits",
      C: "Plan the budget → hire staff → test → close",
      D: "Describe benefits → select tools → identify symptoms → stop"
    },
    correct: "B",
    explanation_en: "This is the five-step sequence shown in the slide diagram.",
    explanation_ar: "هذا هو الترتيب الصحيح الموضح في مخطط السلايد: تحديد المشكلة ← وضعها في سياقها ← إيجاد السبب الجذري ← وصف النتيجة المثالية ← اقتراح الحل وتوضيح الفوائد.",
    source: "PDF p. 4 — Slide 5"
  },
  {
    id: 8,
    question: "Problem solving depends on correctly identifying the problem’s:",
    options: {
      A: "Color",
      B: "Cause",
      C: "Owner’s job title",
      D: "Presentation format"
    },
    correct: "B",
    explanation_en: "The slide says the cause must be correctly identified so the best solution can be selected and implemented for sustained results.",
    explanation_ar: "يعتمد حل المشكلات الناجح على التحديد الصحيح لسبب المشكلة (Cause)، وذلك لاختيار الحل الأفضل وتطبيقه لضمان استدامة النتائج.",
    source: "PDF p. 6 — Slide 7"
  },
  {
    id: 9,
    question: "Which sequence represents the problem-solving cycle shown in the diagram?",
    options: {
      A: "Define the problem → diagnose the root cause → identify and implement a solution → sustain the results",
      B: "Implement a solution → define the problem → stop",
      C: "Diagnose the cause → ignore results → restart",
      D: "Sustain results → select a problem → define a budget"
    },
    correct: "A",
    explanation_en: "The diagram presents these four connected stages in this order.",
    explanation_ar: "دورة حل المشكلات تتكون من 4 مراحل مترابطة بهذا الترتيب: تعريف المشكلة ← تشخيص السبب الجذري ← تحديد وتطبيق الحل ← استدامة النتائج المحققة.",
    source: "PDF p. 6 — Slide 7"
  },
  {
    id: 10,
    question: "When defining a problem, why should fact be differentiated from opinion?",
    options: {
      A: "To focus on the problem rather than its symptoms",
      B: "To make the statement longer",
      C: "To avoid collecting evidence",
      D: "To replace subject matter experts"
    },
    correct: "A",
    explanation_en: "The slide emphasizes stating the problem specifically, separating fact from opinion, and discovering underlying causes.",
    explanation_ar: "يجب التمييز بين الحقائق والآراء للتركيز على المشكلة الواقعية وأسبابها الدفينة بدلاً من الانخداع بالأعراض الظاهرية.",
    source: "PDF p. 7 — Slide 8"
  },
  {
    id: 11,
    question: "During problem definition, whom should the team involve?",
    options: {
      A: "Only the project manager",
      B: "All interested workgroups affected by the problem and subject matter experts",
      C: "Only external customers",
      D: "No one outside the development team"
    },
    correct: "B",
    explanation_en: "The slide recommends involving affected workgroups and asking subject matter experts to understand processes and issues.",
    explanation_ar: "توصي السلايدات بإشراك كافة مجموعات العمل المتأثرة بالمشكلة والاستعانة بالخبراء المتخصصين (SMEs) لفهم العمليات والمشكلات بعمق.",
    source: "PDF p. 7 — Slide 8"
  },
  {
    id: 12,
    question: "Which type of supporting data should be collected and analyzed when defining a problem?",
    options: {
      A: "Qualitative and quantitative",
      B: "Only financial",
      C: "Only opinions",
      D: "Only historical photographs"
    },
    correct: "A",
    explanation_en: "The slide explicitly calls for collecting and analyzing both qualitative and quantitative supporting data.",
    explanation_ar: "تؤكد السلايدات بوضوح على جمع وتحليل البيانات الداعمة بنوعيها: البيانات النوعية والكمية (Qualitative and Quantitative Data).",
    source: "PDF p. 7 — Slide 8"
  },
  {
    id: 13,
    question: "A gemba review is used to:",
    options: {
      A: "Document how processes currently work",
      B: "Choose a project name",
      C: "Estimate future market share",
      D: "Replace all data collection"
    },
    correct: "A",
    explanation_en: "The slide says to go to the gemba review and document how processes currently work, including who does what and when.",
    explanation_ar: "مراجعة الجيمبا (Gemba Review) تعني النزول لموقع العمل الفعلي لتوثيق كيفية سير العمليات الحالية على أرض الواقع: من يقوم بماذا وتوقيت ذلك.",
    source: "PDF p. 7 — Slide 8"
  },
  {
    id: 14,
    question: "In the descriptive questions, “Where” refers to:",
    options: {
      A: "The person who detected the issue",
      B: "The point of detection where the problem was detected",
      C: "The reason the issue matters",
      D: "The number of affected products"
    },
    correct: "B",
    explanation_en: "The slide defines Where as the point of detection.",
    explanation_ar: "في الأسئلة الوصفية لتحليل المشكلة، يشير سؤال 'أين' (Where) إلى نقطة أو مكان اكتشاف المشكلة (Point of detection).",
    source: "PDF p. 8 — Slide 9"
  },
  {
    id: 15,
    question: "In the descriptive questions, “Who” refers to:",
    options: {
      A: "Who caused the problem",
      B: "Who detected the problem",
      C: "Who will pay for the solution",
      D: "Who approves the budget"
    },
    correct: "B",
    explanation_en: "The slide explicitly says Who is for detection only, not cause.",
    explanation_ar: "توضح السلايد بشكل صريح أن سؤال 'من' (Who) يشير إلى من اكتشف المشكلة فقط، ولا يُقصد به البحث عن المتسبب في المشكلة.",
    source: "PDF p. 8 — Slide 9"
  },
  {
    id: 16,
    question: "Root Cause Analysis (RCA) is a collective term for:",
    options: {
      A: "Approaches, tools, and techniques used to uncover causes of problems and direct corrective action",
      B: "A method for writing project advertisements",
      C: "A process for assigning grades",
      D: "A technique for estimating team size"
    },
    correct: "A",
    explanation_en: "This is the definition of RCA given in the lecture.",
    explanation_ar: "تحليل السبب الجذري (RCA) هو مصطلح شامل للأساليب والأدوات والتقنيات المستخدمة لكشف الأسباب الحقيقية للمشاكل وتوجيه الإجراءات التصحيحية السليمة.",
    source: "PDF p. 9 — Slide 10"
  },
  {
    id: 17,
    question: "Which question is associated with the 5 Whys technique?",
    options: {
      A: "Why? Why? Why? Why? Why?",
      B: "Who? Where? When? How? What?",
      C: "How much? How many? How long?",
      D: "Which tool? Which team? Which budget?"
    },
    correct: "A",
    explanation_en: "The slide identifies repeated Why questions as the 5 Whys technique.",
    explanation_ar: "تقنية 'الـ 5 Whys' تعتمد على تكرار السؤال بـ 'لماذا؟' (Why?) خمس مرات متتالية للتعمق وراء الأعراض والوصول للسبب الجذري.",
    source: "PDF p. 9 — Slide 10"
  },
  {
    id: 18,
    question: "When generating potential solutions, the team should:",
    options: {
      A: "Select the first idea immediately",
      B: "Postpone selecting one solution until several alternatives have been proposed",
      C: "Avoid short- and long-term alternatives",
      D: "Ignore customers and suppliers"
    },
    correct: "B",
    explanation_en: "The slide recommends generating several alternatives before choosing one.",
    explanation_ar: "عند توليد الحلول المحتملة، توصي السلايدات بتأجيل اختيار حل نهائي حتى يتم اقتراح عدة بدائل متنوعة ودراستها بموضوعية.",
    source: "PDF p. 10 — Slide 11"
  },
  {
    id: 19,
    question: "Why should multiple alternatives be considered?",
    options: {
      A: "They can significantly improve the value of the ideal solution",
      B: "They always eliminate implementation costs",
      C: "They make root-cause analysis unnecessary",
      D: "They guarantee that no risks exist"
    },
    correct: "A",
    explanation_en: "The lecture explains that considering alternatives can enhance the value of the ideal solution.",
    explanation_ar: "تشرح المحاضرة أن طرح ودراسة عدة بدائل وحلول يسهم في تحسين جودة وقيمة الحل المثالي النهائي بشكل ملحوظ.",
    source: "PDF p. 10 — Slide 11"
  },
  {
    id: 20,
    question: "Which action is suggested to encourage better solutions?",
    options: {
      A: "Combine acceptable ideas into a stronger hybrid solution",
      B: "Stop brainstorming after the first idea",
      C: "Exclude customers and suppliers",
      D: "Avoid creative thinking"
    },
    correct: "A",
    explanation_en: "The slide suggests combining two acceptable solutions into one stronger hybrid solution.",
    explanation_ar: "تقترح السلايدات دمج فكرتين أو حلين مقبولين معاً لإنتاج حل هجين متكامل وأكثر قوة وفاعلية (Stronger hybrid solution).",
    source: "PDF p. 10 — Slide 11"
  },
  {
    id: 21,
    question: "Which of the following is a question to consider when evaluating a solution?",
    options: {
      A: "How does this solution address the root cause?",
      B: "What color should the report be?",
      C: "Who created the lecture slides?",
      D: "How can monitoring be avoided?"
    },
    correct: "A",
    explanation_en: "The slide asks whether the proposed solution addresses the root cause.",
    explanation_ar: "من أهم الأسئلة التي يجب مراعاتها عند تقييم أي حل مقترح: كيف يعالج هذا الحل السبب الجذري للمشكلة؟",
    source: "PDF p. 11 — Slide 12"
  },
  {
    id: 22,
    question: "A contingency plan is concerned with:",
    options: {
      A: "Possible problems with the solution and how to respond",
      B: "The original problem title only",
      C: "The team’s attendance record",
      D: "Removing all monitoring activities"
    },
    correct: "A",
    explanation_en: "The slide asks about possible problems with the solution and contingency plans.",
    explanation_ar: "خطة الطوارئ (Contingency plan) تهتم بالمشاكل والعقبات المحتمل ظهورها عند تطبيق الحل وكيفية الاستجابة والتعامل معها بنجاح.",
    source: "PDF p. 11 — Slide 12"
  },
  {
    id: 23,
    question: "After selecting a solution, implementation becomes easier with:",
    options: {
      A: "A carefully developed plan specifying what, who, and when",
      B: "An undocumented verbal agreement",
      C: "No measurement criteria",
      D: "A plan without responsibilities"
    },
    correct: "A",
    explanation_en: "The slide says the implementation plan should include details on what, who, and when.",
    explanation_ar: "يصبح تنفيذ الحل أكثر سهولة ونجاحاً بوجود خطة تنفيذ مطورة بعناية تحدد بوضوح: ماذا سيتم إنجازه، ومن المسؤول، والمواعيد الزمنية (What, Who, and When).",
    source: "PDF p. 12 — Slide 14"
  },
  {
    id: 24,
    question: "A carefully developed implementation plan should determine how the solution will be:",
    options: {
      A: "Measured",
      B: "Renamed",
      C: "Advertised",
      D: "Archived before use"
    },
    correct: "A",
    explanation_en: "The plan should define how the change will be measured and how implementation will be monitored.",
    explanation_ar: "يجب أن تحدد خطة التنفيذ المحكمة كيفية قياس نجاح الحل (Measured) ومراقبة مؤشرات التطبيق العملي.",
    source: "PDF p. 12 — Slide 14"
  },
  {
    id: 25,
    question: "Which is an example of a potential implementation barrier?",
    options: {
      A: "Human factors that may make people feel threatened by new procedures",
      B: "The existence of a clear goal",
      C: "A documented measurement method",
      D: "A defined project deliverable"
    },
    correct: "A",
    explanation_en: "The slide highlights human factors and the difficulty of remembering new procedures as considerations.",
    explanation_ar: "من أبرز عوائق التنفيذ: العوامل البشرية التي قد تجعل الموظفين يشعرون بالتهديد من الإجراءات الجديدة أو صعوبة التكيف معها وتذكرها.",
    source: "PDF p. 12 — Slide 14"
  },
  {
    id: 26,
    question: "Planning is defined in the lecture as:",
    options: {
      A: "Organizing pieces of knowledge into a consistent sequence of actions to accomplish a goal",
      B: "Randomly selecting actions",
      C: "Recording completed work only",
      D: "Choosing a goal without actions"
    },
    correct: "A",
    explanation_en: "This is the definition of planning shown in the lecture.",
    explanation_ar: "التخطيط (Planning) يُعرف في المحاضرة بأنه تنظيم أجزاء المعرفة في تسلسل متسق ومترابط من الإجراءات والخطوات لتحقيق هدف معين.",
    source: "PDF p. 13 — Slide 16"
  },
  {
    id: 27,
    question: "The task of a planner is to find:",
    options: {
      A: "A sequence of actions that allows a problem solver to accomplish a specific task",
      B: "A list of unrelated facts",
      C: "The cheapest robot available",
      D: "A final state without actions"
    },
    correct: "A",
    explanation_en: "The slide explains that a planner finds an action sequence to accomplish a specific task.",
    explanation_ar: "مهمة المخطط (Planner) هي إيجاد تسلسل من الإجراءات والعمليات التي تتيح للنظام إنجاز مهمة محددة والانتقال من الحالة الحالية إلى حالة الهدف.",
    source: "PDF p. 13 — Slide 16"
  },
  {
    id: 28,
    question: "Traditional planning is described as knowledge-intensive because:",
    options: {
      A: "Plan creation requires organizing pieces of knowledge and partial plans into a solution procedure",
      B: "It does not use knowledge",
      C: "It relies only on random choices",
      D: "It avoids solution procedures"
    },
    correct: "A",
    explanation_en: "The lecture directly links traditional planning’s knowledge-intensive nature to organizing knowledge and partial plans.",
    explanation_ar: "يوصف التخطيط التقليدي بأنه كثيف المعرفة (Knowledge-intensive) لأن بناء الخطة يتطلب دمج وتنظيم المعارف والخطط الجزئية لتكوين إجراء حل متكامل.",
    source: "PDF p. 13 — Slide 16"
  },
  {
    id: 29,
    question: "Which is an application of planning mentioned in the lecture?",
    options: {
      A: "Manufacturing process control",
      B: "Social media filtering only",
      C: "Image compression only",
      D: "Audio recording only"
    },
    correct: "A",
    explanation_en: "The slide mentions manufacturing applications such as process control and designing a robot controller.",
    explanation_ar: "ذكرت السلايدات تطبيقات التخطيط في المجال الصناعي مثل: التحكم في عمليات التصنيع (Process control) وتصميم متحكمات الروبوت الذكية.",
    source: "PDF p. 13 — Slide 16"
  },
  {
    id: 30,
    question: "In the block-planning example, what is the first listed action?",
    options: {
      A: "Go to room b",
      B: "Put down whatever is now held",
      C: "Pick up block a",
      D: "Return to the original location"
    },
    correct: "B",
    explanation_en: "The listed sequence starts by putting down whatever is currently held.",
    explanation_ar: "في مثال تخطيط الكتل، يبدأ تسلسل العمليات بإنزال أي شيء ممسوك في اليد حالياً (Put down whatever is now held) لتفريغ القابض.",
    source: "PDF p. 14 — Slide 17"
  },
  {
    id: 31,
    question: "The actions of a traditional robot are composed of the robot’s:",
    options: {
      A: "Atomic actions",
      B: "Opinions",
      C: "Goals only",
      D: "Visual labels"
    },
    correct: "A",
    explanation_en: "The lecture states that the steps of a traditional robot are composed of atomic actions.",
    explanation_ar: "تتكون تصرفات الروبوت التقليدي من إجراءات ذرية أساسية (Atomic actions) لا يمكن تجزئتها لأبسط منها.",
    source: "PDF p. 15 — Slide 18"
  },
  {
    id: 32,
    question: "Plans are created by searching through:",
    options: {
      A: "A space of possible actions",
      B: "A list of unrelated objects",
      C: "A fixed set of opinions",
      D: "Only the final goal state"
    },
    correct: "A",
    explanation_en: "The slide says plans are created by searching possible actions until the required sequence is discovered.",
    explanation_ar: "يتم بناء الخطط بالبحث والتقصي داخل فضاء من الإجراءات والعمليات الممكنة (Space of possible actions) حتى الوصول للتسلسل المطلوب.",
    source: "PDF p. 15 — Slide 18"
  },
  {
    id: 33,
    question: "The search for a plan terminates when:",
    options: {
      A: "The goal state is produced",
      B: "The first action is considered",
      C: "The robot becomes empty",
      D: "All possible actions are removed"
    },
    correct: "A",
    explanation_en: "The lecture says search terminates when the goal state, the appropriate description of the world, is produced.",
    explanation_ar: "تنتهي عملية البحث عن الخطة بنجاح عند الوصول إلى حالة الهدف المنشودة (Goal state) وتوليد التوصيف الصحيح للعالم المطلوب.",
    source: "PDF p. 15 — Slide 18"
  },
  {
    id: 34,
    question: "Traditional planning may be viewed as:",
    options: {
      A: "A state-space search",
      B: "A database normalization process",
      C: "A sorting algorithm",
      D: "A communication protocol"
    },
    correct: "A",
    explanation_en: "The slide explicitly says planning may be seen as a state-space search.",
    explanation_ar: "توضح السلايد صراحةً أنه يمكن اعتبار التخطيط التقليدي بمثابة عملية بحث في فضاء الحالات (State-space search).",
    source: "PDF p. 16 — Slide 19"
  },
  {
    id: 35,
    question: "In the blocks-world example, the robot arm can move a clear block to:",
    options: {
      A: "Any location on the tabletop or on top of another clear block",
      B: "Only the original location",
      C: "Only the floor",
      D: "Any block even if covered"
    },
    correct: "A",
    explanation_en: "The lecture says the gripper can grasp any clear block and move it to any tabletop location or onto another clear block.",
    explanation_ar: "في مثال عالم الكتل (Blocks-world)، يمكن لذراع الروبوت نقل أي كتلة حرة وغير مغطاة (Clear) إلى أي موضع على الطاولة أو فوق كتلة حرة أخرى.",
    source: "PDF p. 18 — Slide 20"
  },
  {
    id: 36,
    question: "Which task means picking up block W from its current location?",
    options: {
      A: "putdown(W)",
      B: "pickup(W)",
      C: "stack(U,V)",
      D: "unstack(U,V)"
    },
    correct: "B",
    explanation_en: "The task table defines pickup(W) as picking up block W from its current location.",
    explanation_ar: "يُعرّف جدول المهام المعامل pickup(W) بأنه التقاط الكتلة W ورفعها من موقعها الحالي.",
    source: "PDF p. 19 — Slide 21"
  },
  {
    id: 37,
    question: "Which operator places block U on top of block V?",
    options: {
      A: "pickup(U)",
      B: "putdown(U)",
      C: "stack(U,V)",
      D: "unstack(U,V)"
    },
    correct: "C",
    explanation_en: "The task table defines stack(U,V) as placing U on top of V.",
    explanation_ar: "المعامل stack(U,V) يرمز لعملية وضع الكتلة U مباشرة فوق الكتلة V.",
    source: "PDF p. 19 — Slide 21"
  },
  {
    id: 38,
    question: "What does clear(X) mean in the state description?",
    options: {
      A: "Block X is on the table",
      B: "Block X has nothing on top of it",
      C: "The robot is holding block X",
      D: "Block X is at coordinates X, Y, Z"
    },
    correct: "B",
    explanation_en: "The predicate list defines clear(X) as having nothing on top of block X.",
    explanation_ar: "الدالة المنطقية clear(X) تعني أن الكتلة X حرة ولا يوجد أي مجسم فوقها، وبالتالي يمكن حملها أو البناء فوقها.",
    source: "PDF p. 20 — Slide 22"
  },
  {
    id: 39,
    question: "What does gripping() represent?",
    options: {
      A: "The robot arm is holding block X",
      B: "The robot gripper is empty",
      C: "Block X is on the table",
      D: "Block X is clear"
    },
    correct: "B",
    explanation_en: "The slide defines gripping() as the robot gripper being empty; gripping(X) means it is holding block X.",
    explanation_ar: "توضح السلايد أن الدالة ()gripping بدون معطيات تعني أن ملقط الروبوت فارغ؛ أما gripping(X) فتعني أنه يحمل الكتلة X.",
    source: "PDF p. 20 — Slide 22"
  },
  {
    id: 40,
    question: "What does STRIPS stand for in the lecture?",
    options: {
      A: "Stanford Research Institute Planning System",
      B: "Structured Robot Intelligence Processing Software",
      C: "State Transition and Robot Instruction Planning System",
      D: "Standard Research Information Processing System"
    },
    correct: "A",
    explanation_en: "The slide expands STRIPS as Stanford Research Institute Planning System.",
    explanation_ar: "اختصار STRIPS يشير إلى نظام التخطيط الشهير لمعهد ستانفورد للأبحاث (Stanford Research Institute Planning System).",
    source: "PDF p. 21 — Slide 23"
  },
  {
    id: 41,
    question: "In a STRIPS operator description, the first element is the:",
    options: {
      A: "Add list",
      B: "Delete list",
      C: "Preconditions list",
      D: "Goal list"
    },
    correct: "C",
    explanation_en: "The first element is the preconditions (P), which must be satisfied before applying an operator.",
    explanation_ar: "العنصر الأول في وصف أي معامل بنظام STRIPS هو قائمة الشروط المسبقة (Preconditions - P) التي يلزم تحققها قبل تطبيق المعامل.",
    source: "PDF p. 22 — Slide 24"
  },
  {
    id: 42,
    question: "In a STRIPS operator description, the add list contains:",
    options: {
      A: "Items removed from the state",
      B: "Additions to the state description resulting from the operator",
      C: "Conditions required before the operator",
      D: "Actions that must never be used"
    },
    correct: "B",
    explanation_en: "The add list (A) contains additions to the state description after applying the operator.",
    explanation_ar: "قائمة الإضافة (Add list - A) في STRIPS تحتوي على الحالات والوقائع الجديدة التي تضاف لوصف الحالة بعد تنفيذ المعامل بنجاح.",
    source: "PDF p. 22 — Slide 24"
  },
  {
    id: 43,
    question: "In a STRIPS operator description, the delete list contains:",
    options: {
      A: "Items removed from the state description",
      B: "New items added to the state",
      C: "The operator’s name only",
      D: "The final goal only"
    },
    correct: "A",
    explanation_en: "The delete list (D) contains items removed from the state description when the operator is applied.",
    explanation_ar: "قائمة الحذف (Delete list - D) تحتوي على الحقائق والحالات التي تلغى وتُحذف من وصف الحالة بعد تطبيق المعامل.",
    source: "PDF p. 22 — Slide 24"
  },
  {
    id: 44,
    question: "Which set correctly lists the four blocks-world operators?",
    options: {
      A: "move, rotate, stop, start",
      B: "pickup, putdown, stack, unstack",
      C: "define, diagnose, monitor, learn",
      D: "push, pull, open, close"
    },
    correct: "B",
    explanation_en: "The lecture identifies pickup, putdown, stack, and unstack as the four operators.",
    explanation_ar: "تحدد المحاضرة المعاملات الأربعة الأساسية في عالم الكتل وهي: الالتقاط، الإنزال، التكديس، وفك التكديس (pickup, putdown, stack, unstack).",
    source: "PDF p. 21 and p. 23 — Slides 23 and 25"
  },
  {
    id: 45,
    question: "The decision-making process is:",
    options: {
      A: "A systematic approach to choosing a course of action among multiple alternatives",
      B: "A random response to a situation",
      C: "A process that avoids gathering information",
      D: "The same as implementing a solution without evaluation"
    },
    correct: "A",
    explanation_en: "The slide defines decision-making as a systematic approach involving alternatives, information, and evaluation.",
    explanation_ar: "تُعرّف السلايد عملية اتخاذ القرار بأنها منهج منظم ومنطقي لاختيار أفضل مسار عمل من بين عدة بدائل متاحة بناءً على تحليل المعلومات والتقييم.",
    source: "PDF p. 24 — Slide 26"
  },
  {
    id: 46,
    question: "Which criterion is mentioned for evaluating potential solutions in decision-making?",
    options: {
      A: "Feasibility, risk, and impact",
      B: "Font size, color, and layout",
      C: "Popularity only",
      D: "Team seniority only"
    },
    correct: "A",
    explanation_en: "The lecture lists feasibility, risk, and impact as criteria for evaluating potential solutions.",
    explanation_ar: "حددت المحاضرة 3 معايير رئيسية لتقييم الحلول المقترحة: قابلية التنفيذ والجدوى (Feasibility)، والمخاطر المحتملة (Risk)، والأثر الإيجابي المتوقع (Impact).",
    source: "PDF p. 24 — Slide 26"
  },
  {
    id: 47,
    question: "Which of the following appears in the lecture’s list of problem-solving skills?",
    options: {
      A: "Adaptability",
      B: "Database indexing",
      C: "Cryptography",
      D: "Public speaking only"
    },
    correct: "A",
    explanation_en: "Adaptability is included in the list of key problem-solving skills.",
    explanation_ar: "تعد مهارة التكيف والمرونة (Adaptability) من أبرز المهارات الأساسية لحل المشكلات المذكورة في قائمة المحاضرة.",
    source: "PDF p. 26 — Slide 28"
  },
  {
    id: 48,
    question: "Which of the following is listed as a decision-making skill?",
    options: {
      A: "Risk Assessment",
      B: "Image Processing",
      C: "Code Refactoring",
      D: "Network Routing"
    },
    correct: "A",
    explanation_en: "Risk Assessment appears in the lecture’s decision-making skills list.",
    explanation_ar: "يعد تقييم المخاطر (Risk Assessment) إحدى المهارات الجوهرية لاتخاذ القرارات الصائبة في بيئات العمل.",
    source: "PDF p. 25 — Slide 27"
  },
  {
    id: 49,
    question: "Which is the correct order of the decision-making process presented in the slides?",
    options: {
      A: "Gather information → take action → identify problem → review",
      B: "Identify the problem → gather relevant information → identify alternatives → weigh evidence → choose → take action → review",
      C: "Choose an alternative → identify the problem → gather information → stop",
      D: "Identify alternatives → take action → weigh evidence → define the problem"
    },
    correct: "B",
    explanation_en: "This sequence follows all seven steps listed in the lecture.",
    explanation_ar: "الترتيب الصحيح لخطوات عملية اتخاذ القرار السبع كما ورد في المحاضرة: تحديد المشكلة ← جمع المعلومات ← تحديد البدائل ← وزن الأدلة ← اختيار البديل ← التنفيذ ← المراجعة والتقييم.",
    source: "PDF p. 27 — Slide 30"
  },
  {
    id: 50,
    question: "Which sequence matches the Problem-Solving Process slide?",
    options: {
      A: "Define → Analyze → Generate possible solutions → Evaluate and select → Implement → Monitor and evaluate → Reflect and learn",
      B: "Choose → advertise → implement → stop",
      C: "Analyze → implement → define → reflect",
      D: "Monitor → define → select → ignore"
    },
    correct: "A",
    explanation_en: "The slide lists these seven stages in this order.",
    explanation_ar: "المراحل السبع لعملية حل المشكلات مرتبة كما جاءت بالسلايد: التعريف ← التحليل ← توليد الحلول ← التقييم والاختيار ← التنفيذ ← المراقبة والتقييم ← التأمل والتعلّم المستمر.",
    source: "PDF p. 28 — Slide 31"
  }
];
