<?php
require_once(dirname(__FILE__) . '/../../config.php');
require_once($CFG->libdir . '/tablelib.php');

require_login();
require_capability('moodle/site:config', context_system::instance());

$table = new html_table();
$table->attributes['class'] = 'generaltable';
$table->head = array(
    get_string('randomusers', 'report_randomusers'),
    get_string('coursesenrolled', 'report_randomusers')
);

$random_users = $DB->get_records_sql("SELECT id, username FROM {user} ORDER BY RAND() LIMIT 10");

foreach ($random_users as $user) {
    $courses = enrol_get_users_courses($user->id, false, '', 'id,fullname');
    $course_names = implode('<br>', array_column($courses, 'fullname'));

    $table->data[] = array(
        $user->username,
        $course_names,
    );
}

echo $OUTPUT->header();
echo html_writer::table($table);
echo $OUTPUT->footer();
