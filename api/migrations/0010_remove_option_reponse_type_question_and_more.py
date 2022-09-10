# Generated by Django 4.0.3 on 2022-08-30 16:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_modele_personnalisable_theme_page_fk_sondage1_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='option_reponse',
            name='type_question',
        ),
        migrations.RemoveField(
            model_name='parametre',
            name='fk_type_question',
        ),
        migrations.AddField(
            model_name='option_reponse',
            name='fk_question',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='api.question'),
        ),
        migrations.AddField(
            model_name='parametre',
            name='fk_question',
            field=models.ManyToManyField(to='api.question'),
        ),
        migrations.AddField(
            model_name='question',
            name='nom_type',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.DeleteModel(
            name='Type_question',
        ),
    ]
